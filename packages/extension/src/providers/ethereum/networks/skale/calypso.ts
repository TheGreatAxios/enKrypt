import { NetworkNames } from "@enkryptcom/types";
import { EvmNetwork } from "../../types/evm-network";
import {
  SkaleParams,
  createSkaleEvmNetwork,
  ICustomSKALEAsset,
} from "./skale-base";

export const calypsoChainID = "0x5d456c62";

const skaleCalypsoOptions: SkaleParams = {
  name: NetworkNames.SkaleCalypso,
  name_long: "SKALE | Calypso NFT Hub",
  chainName: "honorable-steel-rasalhague",
  chainID: calypsoChainID,
  icon: "skaleCalypsoNFTHub.png",
};

export const calypsoAssets: ICustomSKALEAsset[] = [
  {
    name: "Ethereum Clone",
    symbol: "ETHC",
    address: "0xD2Aaa00700000000000000000000000000000000",
    coingeckoID: "ethereum",
  },
];

const skaleCalypso = new EvmNetwork(createSkaleEvmNetwork(skaleCalypsoOptions));

export default skaleCalypso;