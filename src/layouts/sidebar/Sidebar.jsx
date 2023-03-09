import React from "react";
import { SOCIALS } from "../../assets/Icon";

const sidebarMenu = [
  {
    link: "https://alturanft.medium.com/",
    name: "medium",
    Icon: SOCIALS.MediumIcon,
  },
  {
    link: "https://twitter.com/AlturaNFT/",
    name: "twitter",
    Icon: SOCIALS.TwitterIcon,
  },
  {
    link: "https://t.me/joinchat/SEp_Uz557XhmNzM5",
    name: "telegram",
    Icon: SOCIALS.TelegramIcon,
  },
  {
    link: "https://www.instagram.com/Altura.nft/",
    name: "instagram",
    Icon: SOCIALS.InstagramIcon,
  },
  {
    link: "https://discord.com/invite/cHW6SDMsEZ",
    name: "discord",
    Icon: SOCIALS.DiscordIcon,
  },
];

const Sidebar = () => {
  return (
    <div className="w-[120px] hidden md:flex h-screen bg-black sticky top-0">
      <ul className="sidebarMenu flex flex-col absolute bottom-28 right-0">
        {sidebarMenu.map((menuLink, index) => (
          <a
            target="_blank"
            rel="noreferrer"
            key={index}
            href={menuLink.link}
            className="w-10 h-10 flex items-center justify-center hover:bg-gray-900 my-1 rounded"
          >
            <li className="font-medium text-gray-200" title={menuLink.name}>
              <menuLink.Icon />
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
