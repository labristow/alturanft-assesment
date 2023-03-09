import React, { useState } from "react";
import { Navbar } from "../../layouts/navbar/Navbar";
import Sidebar from "../../layouts/sidebar/Sidebar";
import NFTCard from "../../components/card/NFTCard";
import { getAllAssetsByUser } from "../../services/requests/getAllAssetsByUser";
import Modal from "../../components/modal/Modal";
import Spinner from "../../components/spinner/Spinner";
import { correctNullMetadata } from "../../utils/correctNullMetadata";
import { useAddress } from "../../hook/useAddress";

const MarketPlace = () => {
  const { address, onSearchInputChange } = useAddress();
  const [isLoading, setIsLoading] = useState(false);
  const [nftData, setNftData] = useState(null);
  const [selectedNFT, setSelectedNFT] = useState(null);
  const showDetails = (selectedIndex) => {
    const _selectedNFT = nftData[selectedIndex];
    setSelectedNFT(_selectedNFT);
  };

  const fetchNFTs = async () => {
    setNftData(null);
    setIsLoading(true);
    if (address.length === 42) {
      const { data } = await getAllAssetsByUser(address);
      const correctedData = correctNullMetadata(data.result);
      setNftData(correctedData);
    } else {
      alert("Address length is not upto 42 or more");
    }
    setIsLoading(false);
  };
  return (
    <div className="bg-black w-full h-screen flex overflow-y-scroll">
      <Sidebar />
      <div className="main-container w-full">
        <Navbar
          address={address}
          onSearchInputChange={onSearchInputChange}
          FetchNFTsHandler={fetchNFTs}
        />
        <Modal selectedNFT={selectedNFT} />
        <div className="w-full px-6 pt-10 md:px-16">
          {!nftData && (
            <div className="md:-ml-28 w-full h-96 flex flex-col items-center justify-center">
              <h5 className="text-white text-2xl">No data available.</h5>
              <p className="text-gray-400 w-full md:w-[460px] text-center">
                Enter the address of the nft collection you want to see and
                click on search button at the top right corner .
              </p>
              {isLoading && <Spinner />}
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
            {nftData?.map((data, index) => (
              <NFTCard
                key={index}
                index={index}
                data={data}
                showDetails={showDetails}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
