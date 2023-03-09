import React, { useEffect, useState } from "react";
import { ICONS } from "../../assets/Icon";

const Modal = ({ selectedNFT }) => {
  const [data, setData] = useState(null);
  const [metaData, setMetaData] = useState(null);
  useEffect(() => {
    if (selectedNFT) {
      setData(selectedNFT);
      setMetaData(JSON.parse(selectedNFT.metadata));
      console.log(selectedNFT.metadata);
    }
  }, [selectedNFT]);
  const copyToClipboard = (data) => {
    window.navigator.clipboard.writeText(data);
    alert("Copied");
  };
  const hideOverlay = (e) => {
    const isOverlay = e.target.classList.contains("overlay");
    if (isOverlay) {
      setData(null);
    }
  };
  return (
    <React.Fragment>
      {data && (
        <div
          onClick={hideOverlay}
          className="overlay bg-[#ffffff84] p-6 overflow-y-scroll md:overflow-y-auto flex justify-center items-start md:items-center w-full h-screen fixed z-20 top-0 left-0"
        >
          <div className="w-full md:w-[900px] min-h-[500px] bg-black shadow-2xl border-8 border-black grid grid-cols-1 md:grid-cols-2 ...">
            <div className="w-full h-full overflow-hidden top-0 left-0">
              <img
                src={metaData.image}
                alt={metaData.image}
                className="w-full object-cover"
              />
            </div>
            <div className="w-full p-5">
              <h5 className="text-gray-100 text-2xl font-bold">NFT name</h5>
              <p className="text-gray-300 text-justify mt-2">
                {metaData.name ? metaData.name : "N/A"}
              </p>
              <hr className="my-5" />
              <h5 className="text-gray-100 text-2xl font-bold">
                About this collection
              </h5>
              <p className="text-gray-300 text-justify mt-2">
                {metaData.description ? metaData.description : "N/A"}
              </p>
              <hr className="my-5" />
              <h5 className="text-gray-100 text-2xl font-bold">
                Owner's Address
              </h5>
              <div className="w-full flex items-center">
                <p className="text-gray-300 text-justify mt-2 truncate">
                  {data.owner_of}
                </p>
                <button
                  onClick={() => copyToClipboard(data.owner_of)}
                  className="text-black text-xs bg-white p-1 rounded"
                >
                  copy
                </button>
              </div>
              <hr className="my-5" />
              <a
                href={`https://opensea.io/assets/ethereum/${data.owner_of}/${data.token_id}`}
                target="_blank"
                rel="noreferrer"
                className="h-12 text-sm w-full flex items-center justify-center gap-2 bg-[#1D7DEB] text-white font-semibold rounded"
              >
                <ICONS.CartIcon color="#FFFFFF" />
                Buy Asset
              </a>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Modal;
