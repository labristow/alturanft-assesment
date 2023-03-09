import NotFound from "../assets/not-found.png";

export const correctNullMetadata = (data) => {
  const nfts = data.map((nft) => {
    if (nft.metadata === null) {
      nft.metadata = JSON.stringify({
        name: "N/A",
        image: NotFound,
        description:
          "Description not available for this particular asset from the API provider I'm currently using.Click on buy asset to see the description on opensea marketplace.",
      });
    }
    return nft;
  });
  return nfts;
};
