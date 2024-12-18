/* eslint-disable prettier/prettier */
"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Textarea } from "@nextui-org/input";
import { DatePicker } from "@nextui-org/date-picker";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [image, setImage] = useState(
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  );

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          setImage(reader.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card className="md:w-1/2 w-10/12">
        <CardHeader className="flex justify-center items-center">
          <h1 className="text-xl  font-semibold text-center">
            Welcome to XInsta
          </h1>
        </CardHeader>
        <CardBody className="grid xl:grid-cols-2 w-full grid-cols-1 ">
          <div className="relative flex justify-center items-center">
            {/* Image */}
            <div className="relative w-fit h-fit">
              <Avatar
                alt="User Avatar"
                className="xl:w-52 xl:h-52 w-40 h-40 aspect-square "
                size="lg"
                src={image}
              />
              <div className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md">
                <FaPencilAlt className="text-gray-600" />
              </div>
            </div>

            {/* Input */}
            <input
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              type="file"
              onChange={handleImageChange}
            />

            {/* Pencil Icon */}
          </div>
          <div className="flex w-full justify-center items-center flex-col gap-5">
            <h1 className="text-xl font-semibold mt-5 xl:mt-0">
              Enter your details
            </h1>
            <form className="flex flex-col gap-6 w-10/12 items-center">
              <DatePicker
                label="Date of Birth"
                className="w-full"
                variant="underlined"
              />
              <Textarea
                height={"100"}
                label="Bio"
                placeholder="Enter your bio"
                variant="underlined"
                width={"full"}
              />
            </form>
          </div>
        </CardBody>
        <CardFooter>
          <Button
            className="w-10/12 m-auto mt-4"
            color="primary"
            onClick={() => {
              router.push("/profile");
            }}
          >
            Update Profile
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
