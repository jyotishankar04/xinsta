import Logo from "@/components/Logo";
import React from "react";

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full h-full items-center grid xl:grid-cols-2">
      <div className=" items-center justify-center h-full hidden xl:flex">
        <div className="w-1/2  h-full flex justify-center items-center flex-col">
          <Logo />
        </div>
      </div>
      <div className="flex items-center justify-center h-full">{children}</div>
    </div>
  );
};

export default layout;
