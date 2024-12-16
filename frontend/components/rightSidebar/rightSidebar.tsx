import { Button } from "@nextui-org/button";
import Image from "next/image";

import SidebarLoginButton from "./SidebarLoginButton";

const RightSidebar = () => {
  return (
    <div className="w-full hidden  top-20 px-5 sticky xl:flex flex-col gap-2">
      <div className="text-sm font-semibold bg-default-500 rounded-md  text-default-300 uppercase">
        <SidebarLoginButton />
      </div>

      <div className="text-sm font-semibold gap-2 flex flex-col  rounded-md text-default-300 uppercase">
        <h1 className="p-2 text-default-600">Suggested Users</h1>
        {Array.from({ length: 5 }, (_, index) => (
          <Button
            key={index}
            className="flex items-center justify-start gap-4 w-full p-2"
          >
            <Image
              alt="User Avatar"
              className="rounded-full h-8 w-8 "
              height={30}
              src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg"
              width={30}
            />
            <span className="text-sm font-medium text-default-400">
              User Name
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
