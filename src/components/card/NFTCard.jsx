import React, { useEffect, useState } from "react";
import { ICONS } from "../../assets/Icon";

const NFTCard = ({ index, data, showDetails }) => {
  const [nftMetaData, setNftMetaData] = useState(null);
  useEffect(() => {
    setNftMetaData(JSON.parse(data?.metadata || null));
  }, [data.metadata]);
  const { amount, token_id, owner_of } = data;
  return (
    <div className="nft-card w-full h-[385px] relative overflow-hidden rounded-3xl border border-gray-700 shadow-2xl">
      <div className="w-full h-[220px] object-contain overflow-hidden top-0 left-0">
        <img src={nftMetaData?.image} alt="" className="w-full" />
      </div>
      <div className="details-container w-full px-5 py-2">
        <div className="flex items-center gap-1">
          <h4 className="font-semibold text-white text-lg">
            {nftMetaData?.name}
          </h4>
          <div className="">
            <ICONS.ApprovedIcon />
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="">
            <p className="uppercase text-gray-500 text-[14px] font-semibold">
              AMOUNT
            </p>
            <h5 className="font-bold text-white">
              {parseInt(amount).toFixed(2)}ETH
            </h5>
          </div>
          <div className="">
            <p className="uppercase text-gray-500 text-[14px] font-semibold">
              TOKEN ID
            </p>
            <h5 className="font-bold text-white">{token_id}</h5>
          </div>
        </div>
        <div className="mt-2 flex justify-between items-center gap-4">
          <a
            href={`https://opensea.io/assets/ethereum/${owner_of}/${token_id}`}
            target="_blank"
            rel="noreferrer"
            className="buy-asset-btn h-12 text-sm w-full flex items-center justify-center gap-2 bg-[#1D7DEB] text-white font-semibold rounded"
          >
            <ICONS.CartIcon color="#FFFFFF" />
            Buy Asset
          </a>
          <button
            onClick={() => showDetails(index)}
            className="buy-asset-btn h-12 text-sm w-full flex items-center justify-center gap-2 bg-gray-900 border border-gray-600 text-white font-semibold rounded"
          >
            <ICONS.CartIcon color="#FFFFFF" />
            View Asset
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
