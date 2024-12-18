import Link from "next/link";
import React from "react";
import { CiHome } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { Button } from "@nextui-org/button";
import { FaRegSave } from "react-icons/fa";

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
      icon: <TiMessages />,
    },
    {
      name: "Saved",
      link: "/saved",
      icon: <FaRegSave />,
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
    <div className="col-span-1 md:w-full sticky top-20">
      <ul className="mt-6 flex flex-col gap-2">
        {menu.map((item, index) => (
          <Link key={index} className="w-full" href={item.link}>
            <Button
              className="flex w-fit md:w-full text-2xl md:text-xl opacity-70 gap-3 justify-start items-center"
              variant="light"
            >
              {item.icon}
              <span className="md:block hidden">{item.name}</span>
            </Button>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
