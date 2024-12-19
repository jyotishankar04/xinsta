import Link from "next/link";
import React from "react";
import { CiHome } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoSaveOutline } from "react-icons/io5";
import { TbMessageCircle } from "react-icons/tb";

const Sidebar = () => {
  const menu = [
    {
      name: "Home",
      link: "/",
      icon: <CiHome />,
    },
    {
      name: "Explore",
      link: "/explore",
      icon: <MdOutlineExplore />,
    },
    {
      name: "Search",
      link: "/search",
      icon: <CiSearch />,
    },
    {
      name: "Notifications",
      link: "/notifications",
      icon: <IoIosNotificationsOutline />,
    },
    {
      name: "Messages",
      link: "/messages",
      icon: <TbMessageCircle />,
    },
    {
      name: "Saved",
      link: "/saved",
      icon: <IoSaveOutline />,
    },
    {
      name: "Profile",
      link: "/profile",
      icon: <CiUser />,
    },
    {
      name: "Settings",
      link: "/settings",
      icon: <CiSettings />,
    },
  ];

  return (
    <div className="col-span-1 md:w-full sticky top-20 w-full">
      <ul className="mt-6 flex flex-col gap-2 w-h-full">
        {menu.map((item) => (
          <Link href={item.link} key={item.name}>
            <li className="flex items-center text-xl gap-4  px-4 py-2 rounded-md hover:bg-default-50">
              <span className="font-semibold">{item.icon}</span>
              <span className="md:block hidden">{item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
