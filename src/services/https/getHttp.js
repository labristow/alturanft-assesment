import axios from "axios";

export const getHttp = async (relativePath) => {
  const header = {
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": process.env.REACT_APP_MORALIS_API_KEY,
    },
  };
  return await axios.get(
    `https://deep-index.moralis.io/api/v2${relativePath}`,
    header
  );
};
