import React from "react";
import Logo from "../../assets/logo.svg";

export const Navbar = ({ address, onSearchInputChange, FetchNFTsHandler }) => {
  return (
    <nav className="w-full sticky top-0 bg-[#0000006c] backdrop-blur z-10 md:h-20 shadow flex flex-col md:flex-row items-center justify-between px-6 md:px-2">
      <div className="brand-identity pt-1">
        <a href="/#" className="text-white flex items-center gap-1">
          <img src={Logo} alt="Alturanft logo" />
          <span className="-mt-1 font-bold text-2xl">Altura</span>
        </a>
      </div>
      <div className="flex w-full md:w-auto items-center gap-x-2">
        <input
          type="search"
          name="address"
          value={address}
          onChange={onSearchInputChange}
          className="h-14 md:h-12 w-full md:w-[410px] rounded bg-[#ffffffe7] px-4 placeholder:text-black"
          placeholder="Search NFT by address"
        />
        <button
          onClick={FetchNFTsHandler}
          className="bg-primary-pink rounded block text-white h-14 md:h-12 px-4"
        >
          Search
        </button>
      </div>
    </nav>
  );
};
