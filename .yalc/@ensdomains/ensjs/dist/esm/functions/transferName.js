import { ethers } from 'ethers';
export default async function ({ contracts, provider }, name, newOwner, contract, options) {
    const address = await provider
        ?.getSigner(options?.addressOrIndex)
        .getAddress();
    if (!address) {
        throw new Error('No signer found');
    }
    switch (contract) {
        case 'registry': {
            const registry = (await contracts?.getRegistry()).connect(provider?.getSigner(options?.addressOrIndex));
            return registry.setOwner(ethers.utils.namehash(name), newOwner);
        }
        case 'baseRegistrar': {
            const baseRegistrar = (await contracts?.getBaseRegistrar()).connect(provider?.getSigner(options?.addressOrIndex));
            const labels = name.split('.');
            if (labels.length > 2 || labels[labels.length - 1] !== 'eth') {
                throw new Error('Invalid name for baseRegistrar');
            }
            return baseRegistrar['safeTransferFrom(address,address,uint256)'](address, newOwner, ethers.utils.solidityKeccak256(['string'], [labels[0]]));
        }
        case 'nameWrapper': {
            const nameWrapper = (await contracts?.getNameWrapper()).connect(provider?.getSigner(options?.addressOrIndex));
            return nameWrapper.safeTransferFrom(address, newOwner, ethers.utils.namehash(name), 1, '0x');
        }
        default: {
            throw new Error(`Unknown contract: ${contract}`);
        }
    }
}