import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface NameWrapperInterface extends utils.Interface {
    functions: {
        "_tokens(uint256)": FunctionFragment;
        "allFusesBurned(bytes32,uint96)": FunctionFragment;
        "balanceOf(address,uint256)": FunctionFragment;
        "balanceOfBatch(address[],uint256[])": FunctionFragment;
        "burnChildFuses(bytes32,bytes32,uint96)": FunctionFragment;
        "burnFuses(bytes32,uint96)": FunctionFragment;
        "controllers(address)": FunctionFragment;
        "ens()": FunctionFragment;
        "getData(uint256)": FunctionFragment;
        "getFuses(bytes32)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "isTokenOwnerOrApproved(bytes32,address)": FunctionFragment;
        "metadataService()": FunctionFragment;
        "names(bytes32)": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "registerAndWrapETH2LD(string,address,uint256,address,uint96)": FunctionFragment;
        "registrar()": FunctionFragment;
        "renew(uint256,uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setController(address,bool)": FunctionFragment;
        "setMetadataService(address)": FunctionFragment;
        "setRecord(bytes32,address,address,uint64)": FunctionFragment;
        "setResolver(bytes32,address)": FunctionFragment;
        "setSubnodeOwner(bytes32,string,address,uint96)": FunctionFragment;
        "setSubnodeRecord(bytes32,string,address,address,uint64,uint96)": FunctionFragment;
        "setTTL(bytes32,uint64)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unwrap(bytes32,bytes32,address)": FunctionFragment;
        "unwrapETH2LD(bytes32,address,address)": FunctionFragment;
        "uri(uint256)": FunctionFragment;
        "wrap(bytes,address,uint96,address)": FunctionFragment;
        "wrapETH2LD(string,address,uint96,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_tokens" | "allFusesBurned" | "balanceOf" | "balanceOfBatch" | "burnChildFuses" | "burnFuses" | "controllers" | "ens" | "getData" | "getFuses" | "isApprovedForAll" | "isTokenOwnerOrApproved" | "metadataService" | "names" | "onERC721Received" | "owner" | "ownerOf" | "registerAndWrapETH2LD" | "registrar" | "renew" | "renounceOwnership" | "safeBatchTransferFrom" | "safeTransferFrom" | "setApprovalForAll" | "setController" | "setMetadataService" | "setRecord" | "setResolver" | "setSubnodeOwner" | "setSubnodeRecord" | "setTTL" | "supportsInterface" | "transferOwnership" | "unwrap" | "unwrapETH2LD" | "uri" | "wrap" | "wrapETH2LD"): FunctionFragment;
    encodeFunctionData(functionFragment: "_tokens", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "allFusesBurned", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOfBatch", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "burnChildFuses", values: [BytesLike, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "burnFuses", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "controllers", values: [string]): string;
    encodeFunctionData(functionFragment: "ens", values?: undefined): string;
    encodeFunctionData(functionFragment: "getData", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getFuses", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isTokenOwnerOrApproved", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "metadataService", values?: undefined): string;
    encodeFunctionData(functionFragment: "names", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "registerAndWrapETH2LD", values: [string, string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "registrar", values?: undefined): string;
    encodeFunctionData(functionFragment: "renew", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "safeBatchTransferFrom", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setController", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setMetadataService", values: [string]): string;
    encodeFunctionData(functionFragment: "setRecord", values: [BytesLike, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setResolver", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setSubnodeOwner", values: [BytesLike, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setSubnodeRecord", values: [BytesLike, string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setTTL", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "unwrap", values: [BytesLike, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "unwrapETH2LD", values: [BytesLike, string, string]): string;
    encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "wrap", values: [BytesLike, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "wrapETH2LD", values: [string, string, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "_tokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allFusesBurned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnChildFuses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnFuses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "controllers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFuses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTokenOwnerOrApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "metadataService", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "names", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerAndWrapETH2LD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registrar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renew", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeBatchTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMetadataService", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRecord", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setResolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSubnodeOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSubnodeRecord", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTTL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapETH2LD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrapETH2LD", data: BytesLike): Result;
    events: {
        "ApprovalForAll(address,address,bool)": EventFragment;
        "ControllerChanged(address,bool)": EventFragment;
        "FusesBurned(bytes32,uint96)": EventFragment;
        "NameUnwrapped(bytes32,address)": EventFragment;
        "NameWrapped(bytes32,bytes,address,uint96)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
        "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
        "URI(string,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ControllerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FusesBurned"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NameUnwrapped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NameWrapped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}
export interface ApprovalForAllEventObject {
    account: string;
    operator: string;
    approved: boolean;
}
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface ControllerChangedEventObject {
    controller: string;
    active: boolean;
}
export declare type ControllerChangedEvent = TypedEvent<[
    string,
    boolean
], ControllerChangedEventObject>;
export declare type ControllerChangedEventFilter = TypedEventFilter<ControllerChangedEvent>;
export interface FusesBurnedEventObject {
    node: string;
    fuses: BigNumber;
}
export declare type FusesBurnedEvent = TypedEvent<[
    string,
    BigNumber
], FusesBurnedEventObject>;
export declare type FusesBurnedEventFilter = TypedEventFilter<FusesBurnedEvent>;
export interface NameUnwrappedEventObject {
    node: string;
    owner: string;
}
export declare type NameUnwrappedEvent = TypedEvent<[
    string,
    string
], NameUnwrappedEventObject>;
export declare type NameUnwrappedEventFilter = TypedEventFilter<NameUnwrappedEvent>;
export interface NameWrappedEventObject {
    node: string;
    name: string;
    owner: string;
    fuses: BigNumber;
}
export declare type NameWrappedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], NameWrappedEventObject>;
export declare type NameWrappedEventFilter = TypedEventFilter<NameWrappedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface TransferBatchEventObject {
    operator: string;
    from: string;
    to: string;
    ids: BigNumber[];
    values: BigNumber[];
}
export declare type TransferBatchEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber[],
    BigNumber[]
], TransferBatchEventObject>;
export declare type TransferBatchEventFilter = TypedEventFilter<TransferBatchEvent>;
export interface TransferSingleEventObject {
    operator: string;
    from: string;
    to: string;
    id: BigNumber;
    value: BigNumber;
}
export declare type TransferSingleEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], TransferSingleEventObject>;
export declare type TransferSingleEventFilter = TypedEventFilter<TransferSingleEvent>;
export interface URIEventObject {
    value: string;
    id: BigNumber;
}
export declare type URIEvent = TypedEvent<[string, BigNumber], URIEventObject>;
export declare type URIEventFilter = TypedEventFilter<URIEvent>;
export interface NameWrapper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NameWrapperInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        _tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        allFusesBurned(node: BytesLike, fuseMask: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        burnChildFuses(parentNode: BytesLike, labelhash: BytesLike, _fuses: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        burnFuses(node: BytesLike, _fuses: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        controllers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        ens(overrides?: CallOverrides): Promise<[string]>;
        getData(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, BigNumber] & {
            owner: string;
            fuses: BigNumber;
        }>;
        getFuses(node: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            string
        ] & {
            fuses: BigNumber;
            vulnerability: number;
            vulnerableNode: string;
        }>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        isTokenOwnerOrApproved(node: BytesLike, addr: string, overrides?: CallOverrides): Promise<[boolean]>;
        metadataService(overrides?: CallOverrides): Promise<[string]>;
        names(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        onERC721Received(to: string, arg1: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        ownerOf(id: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            owner: string;
        }>;
        registerAndWrapETH2LD(label: string, wrappedOwner: string, duration: BigNumberish, resolver: string, _fuses: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        registrar(overrides?: CallOverrides): Promise<[string]>;
        renew(tokenId: BigNumberish, duration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setController(controller: string, active: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMetadataService(_newMetadataService: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRecord(node: BytesLike, owner: string, resolver: string, ttl: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setResolver(node: BytesLike, resolver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSubnodeOwner(parentNode: BytesLike, label: string, newOwner: string, _fuses: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSubnodeRecord(parentNode: BytesLike, label: string, newOwner: string, resolver: string, ttl: BigNumberish, _fuses: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTTL(node: BytesLike, ttl: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unwrap(parentNode: BytesLike, labelhash: BytesLike, newController: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unwrapETH2LD(labelhash: BytesLike, newRegistrant: string, newController: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        uri(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        wrap(name: BytesLike, wrappedOwner: string, _fuses: BigNumberish, resolver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        wrapETH2LD(label: string, wrappedOwner: string, _fuses: BigNumberish, resolver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    _tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    allFusesBurned(node: BytesLike, fuseMask: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    burnChildFuses(parentNode: BytesLike, labelhash: BytesLike, _fuses: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    burnFuses(node: BytesLike, _fuses: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    controllers(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    ens(overrides?: CallOverrides): Promise<string>;
    getData(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, BigNumber] & {
        owner: string;
        fuses: BigNumber;
    }>;
    getFuses(node: BytesLike, overrides?: CallOverrides): Promise<[
        BigNumber,
        number,
        string
    ] & {
        fuses: BigNumber;
        vulnerability: number;
        vulnerableNode: string;
    }>;
    isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    isTokenOwnerOrApproved(node: BytesLike, addr: string, overrides?: CallOverrides): Promise<boolean>;
    metadataService(overrides?: CallOverrides): Promise<string>;
    names(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
    onERC721Received(to: string, arg1: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    ownerOf(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
    registerAndWrapETH2LD(label: string, wrappedOwner: string, duration: BigNumberish, resolver: string, _fuses: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    registrar(overrides?: CallOverrides): Promise<string>;
    renew(tokenId: BigNumberish, duration: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setController(controller: string, active: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMetadataService(_newMetadataService: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRecord(node: BytesLike, owner: string, resolver: string, ttl: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setResolver(node: BytesLike, resolver: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSubnodeOwner(parentNode: BytesLike, label: string, newOwner: string, _fuses: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSubnodeRecord(parentNode: BytesLike, label: string, newOwner: string, resolver: string, ttl: BigNumberish, _fuses: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTTL(node: BytesLike, ttl: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unwrap(parentNode: BytesLike, labelhash: BytesLike, newController: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unwrapETH2LD(labelhash: BytesLike, newRegistrant: string, newController: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    uri(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    wrap(name: BytesLike, wrappedOwner: string, _fuses: BigNumberish, resolver: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    wrapETH2LD(label: string, wrappedOwner: string, _fuses: BigNumberish, resolver: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        allFusesBurned(node: BytesLike, fuseMask: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
        burnChildFuses(parentNode: BytesLike, labelhash: BytesLike, _fuses: BigNumberish, overrides?: CallOverrides): Promise<void>;
        burnFuses(node: BytesLike, _fuses: BigNumberish, overrides?: CallOverrides): Promise<void>;
        controllers(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        ens(overrides?: CallOverrides): Promise<string>;
        getData(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, BigNumber] & {
            owner: string;
            fuses: BigNumber;
        }>;
        getFuses(node: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            string
        ] & {
            fuses: BigNumber;
            vulnerability: number;
            vulnerableNode: string;
        }>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        isTokenOwnerOrApproved(node: BytesLike, addr: string, overrides?: CallOverrides): Promise<boolean>;
        metadataService(overrides?: CallOverrides): Promise<string>;
        names(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC721Received(to: string, arg1: string, tokenId: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        ownerOf(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
        registerAndWrapETH2LD(label: string, wrappedOwner: string, duration: BigNumberish, resolver: string, _fuses: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        registrar(overrides?: CallOverrides): Promise<string>;
        renew(tokenId: BigNumberish, duration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: CallOverrides): Promise<void>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        setController(controller: string, active: boolean, overrides?: CallOverrides): Promise<void>;
        setMetadataService(_newMetadataService: string, overrides?: CallOverrides): Promise<void>;
        setRecord(node: BytesLike, owner: string, resolver: string, ttl: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setResolver(node: BytesLike, resolver: string, overrides?: CallOverrides): Promise<void>;
        setSubnodeOwner(parentNode: BytesLike, label: string, newOwner: string, _fuses: BigNumberish, overrides?: CallOverrides): Promise<string>;
        setSubnodeRecord(parentNode: BytesLike, label: string, newOwner: string, resolver: string, ttl: BigNumberish, _fuses: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setTTL(node: BytesLike, ttl: BigNumberish, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        unwrap(parentNode: BytesLike, labelhash: BytesLike, newController: string, overrides?: CallOverrides): Promise<void>;
        unwrapETH2LD(labelhash: BytesLike, newRegistrant: string, newController: string, overrides?: CallOverrides): Promise<void>;
        uri(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        wrap(name: BytesLike, wrappedOwner: string, _fuses: BigNumberish, resolver: string, overrides?: CallOverrides): Promise<void>;
        wrapETH2LD(label: string, wrappedOwner: string, _fuses: BigNumberish, resolver: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ApprovalForAll(address,address,bool)"(account?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(account?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        "ControllerChanged(address,bool)"(controller?: string | null, active?: null): ControllerChangedEventFilter;
        ControllerChanged(controller?: string | null, active?: null): ControllerChangedEventFilter;
        "FusesBurned(bytes32,uint96)"(node?: BytesLike | null, fuses?: null): FusesBurnedEventFilter;
        FusesBurned(node?: BytesLike | null, fuses?: null): FusesBurnedEventFilter;
        "NameUnwrapped(bytes32,address)"(node?: BytesLike | null, owner?: null): NameUnwrappedEventFilter;
        NameUnwrapped(node?: BytesLike | null, owner?: null): NameUnwrappedEventFilter;
        "NameWrapped(bytes32,bytes,address,uint96)"(node?: BytesLike | null, name?: null, owner?: null, fuses?: null): NameWrappedEventFilter;
        NameWrapped(node?: BytesLike | null, name?: null, owner?: null, fuses?: null): NameWrappedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "TransferBatch(address,address,address,uint256[],uint256[])"(operator?: string | null, from?: string | null, to?: string | null, ids?: null, values?: null): TransferBatchEventFilter;
        TransferBatch(operator?: string | null, from?: string | null, to?: string | null, ids?: null, values?: null): TransferBatchEventFilter;
        "TransferSingle(address,address,address,uint256,uint256)"(operator?: string | null, from?: string | null, to?: string | null, id?: null, value?: null): TransferSingleEventFilter;
        TransferSingle(operator?: string | null, from?: string | null, to?: string | null, id?: null, value?: null): TransferSingleEventFilter;
        "URI(string,uint256)"(value?: null, id?: BigNumberish | null): URIEventFilter;
        URI(value?: null, id?: BigNumberish | null): URIEventFilter;
    };
    estimateGas: {
        _tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        allFusesBurned(node: BytesLike, fuseMask: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        burnChildFuses(parentNode: BytesLike, labelhash: BytesLike, _fuses: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        burnFuses(node: BytesLike, _fuses: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        controllers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        ens(overrides?: CallOverrides): Promise<BigNumber>;
        getData(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getFuses(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        isTokenOwnerOrApproved(node: BytesLike, addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        metadataService(overrides?: CallOverrides): Promise<BigNumber>;
        names(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        onERC721Received(to: string, arg1: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        registerAndWrapETH2LD(label: string, wrappedOwner: string, duration: BigNumberish, resolver: string, _fuses: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        registrar(overrides?: CallOverrides): Promise<BigNumber>;
        renew(tokenId: BigNumberish, duration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setController(controller: string, active: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMetadataService(_newMetadataService: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRecord(node: BytesLike, owner: string, resolver: string, ttl: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setResolver(node: BytesLike, resolver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSubnodeOwner(parentNode: BytesLike, label: string, newOwner: string, _fuses: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSubnodeRecord(parentNode: BytesLike, label: string, newOwner: string, resolver: string, ttl: BigNumberish, _fuses: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTTL(node: BytesLike, ttl: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unwrap(parentNode: BytesLike, labelhash: BytesLike, newController: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unwrapETH2LD(labelhash: BytesLike, newRegistrant: string, newController: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        uri(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        wrap(name: BytesLike, wrappedOwner: string, _fuses: BigNumberish, resolver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        wrapETH2LD(label: string, wrappedOwner: string, _fuses: BigNumberish, resolver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allFusesBurned(node: BytesLike, fuseMask: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burnChildFuses(parentNode: BytesLike, labelhash: BytesLike, _fuses: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        burnFuses(node: BytesLike, _fuses: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        controllers(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getData(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFuses(node: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTokenOwnerOrApproved(node: BytesLike, addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        metadataService(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        names(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC721Received(to: string, arg1: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerAndWrapETH2LD(label: string, wrappedOwner: string, duration: BigNumberish, resolver: string, _fuses: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        registrar(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renew(tokenId: BigNumberish, duration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setController(controller: string, active: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMetadataService(_newMetadataService: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRecord(node: BytesLike, owner: string, resolver: string, ttl: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setResolver(node: BytesLike, resolver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSubnodeOwner(parentNode: BytesLike, label: string, newOwner: string, _fuses: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSubnodeRecord(parentNode: BytesLike, label: string, newOwner: string, resolver: string, ttl: BigNumberish, _fuses: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTTL(node: BytesLike, ttl: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unwrap(parentNode: BytesLike, labelhash: BytesLike, newController: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unwrapETH2LD(labelhash: BytesLike, newRegistrant: string, newController: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        uri(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wrap(name: BytesLike, wrappedOwner: string, _fuses: BigNumberish, resolver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        wrapETH2LD(label: string, wrappedOwner: string, _fuses: BigNumberish, resolver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}