/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface Ierc721ReceiverInterface extends ethers.utils.Interface {
  functions: {
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;

  events: {};
}

export class Ierc721Receiver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  listeners<T, G>(
    eventFilter?: TypedEventFilter<T, G>
  ): Array<TypedListener<T, G>>;
  off<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  on<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  once<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeListener<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeAllListeners<T, G>(eventFilter: TypedEventFilter<T, G>): this;

  queryFilter<T, G>(
    event: TypedEventFilter<T, G>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<T & G>>>;

  interface: Ierc721ReceiverInterface;

  functions: {
    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  onERC721Received(
    operator: string,
    from: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onERC721Received(address,address,uint256,bytes)"(
    operator: string,
    from: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC721Received(address,address,uint256,bytes)"(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onERC721Received(address,address,uint256,bytes)"(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
