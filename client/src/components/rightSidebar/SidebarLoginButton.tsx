"use client";

import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SidebarLoginButton = () => {
  const login = false;

  return (
    <>
      {!login ? (
        <Link href="/auth/login">
          <Button
            className="w-full font-semibold"
            color="primary"
            size="sm"
            variant="solid"
          >
            Login <span className="hidden sm:inline">to XInsta</span>
          </Button>
        </Link>
      ) : (
        <div className="flex items-center justify-between p-2 gap-2 ">
          <div className="grid grid-cols-3">
            <Image
              alt="User Avatar"
              className="rounded-full h-10 w-10 "
              height={40}
              src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg"
              width={40}
            />
            <div className="flex col-span-2 flex-col">
              <span className="text-sm font-medium text-default-300">
                User Name
              </span>
              <span className="text-sm text-default-400">Username</span>
            </div>
          </div>
          <Button color="danger" variant="light">
            Logut
          </Button>
        </div>
      )}
    </>
  );
};

export default SidebarLoginButton;
