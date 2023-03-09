import { useState } from "react";

export const useAddress = () => {
  const [address, setAddress] = useState(
    "0x06012c8cf97bead5deae237070f9587f8e7a266d"
  );
  const onSearchInputChange = (e) => {
    const { value } = e.target;
    setAddress(value);
  };
  return {address, onSearchInputChange}
};
