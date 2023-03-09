import React from "react";

const MarketPlaceContext = React.createContext();

const MarketPlaceProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState(
    "0x06012c8cf97bead5deae237070f9587f8e7a266d"
  );
  const [nftData, setNftData] = useState(null);
  const [selectedNFT, setSelectedNFT] = useState(null);
  const showDetails = (selectedIndex) => {
    const _selectedNFT = nftData[selectedIndex];
    setSelectedNFT(_selectedNFT);
  };
  const correctNullMetadata = (data) => {
    const _nfts = data.map((nft) => {
      if (nft.metadata === null) {
        nft.metadata = JSON.stringify({
          name: "N/A",
          image: NotFound,
          description:
            "Description not available for this particular asset from the API provider I'm currently using.Click on buy asset to see the description on opensea marketplace.",
        });
      }
      setIsLoading(false);
      return nft;
    });
    setNftData(_nfts);
  };
  const onSearchInputChange = (e) => {
    const { value } = e.target;
    setAddress(value);
  };
  const fetchNFTs = async () => {
    setNftData(null);
    setIsLoading(true);
    if (address.length === 42) {
      const { data } = await getAllAssetsByUser(address);
      correctNullMetadata(data.result);
    } else {
      alert("Address length is not upto 42 or more");
    }
  };
  return <MarketPlaceContext>{children}</MarketPlaceContext>;
};

export default MarketPlaceProvider;
