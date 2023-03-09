import { getHttp } from "../https/getHttp";

export const getAllAssetsByUser = (address) => getHttp(`/${address}/nft`);
