import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React from "react";

import FollowersCard from "@/components/profile/FollowersCard";
import FollowingCard from "@/components/profile/FollowingCard";
import Posts from "@/components/feed/posts";

const page = () => {
  return (
    <div className="w-[90%] m-auto h-full flex justify-start flex-col items-center">
      <h1 className="text-2xl font-semibold">Profile</h1>
      <div className="w-full flex flex-col justify-start items-center gap-5">
        <Card className="w-full rounded-md p-2">
          <CardHeader className="flex justify-start gap-8 items-center">
            <Avatar
              className="md:w-40 md:h-40 h-20 w-20"
              color="primary"
              radius="full"
              size="lg"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <div className="flex flex-col justify-start items-start flex-grow h-full gap-2">
              <div className="flex justify-between items-center w-full">
                <span className="font-semibold">@username</span>
                <div className="md:block hidden">
                  <Button className="text-primary" size="sm" variant="ghost">
                    Edit
                  </Button>
                </div>
              </div>
              <div className="flex gap-2 justify-between md:px-5 w-full md:mt-5">
                <FollowersCard />
                <FollowingCard />
                <div className="flex flex-col text-xs xl:text-medium  items-center">
                  <span className="font-semibold">Posts</span>
                  <span>54</span>
                </div>
              </div>
              <div className="block md:hidden w-full">
                <Button
                  className="text-primary w-full"
                  size="sm"
                  variant="ghost"
                >
                  Edit
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="font-semibold text-primary text-xl">
                  John Doe
                </span>
              </div>
              <div className="flex gap-2">
                <span className="text-sm text-default-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
        <div>
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default page;
