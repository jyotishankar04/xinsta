"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { InputOtp } from "@nextui-org/input-otp";
import React from "react";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <Card className="md:w-1/2 w-10/12 rounded-md">
      <CardHeader className=" flex justify-center items-center">
        <h1 className="text-xl  font-semibold text-center">
          Welcome to XInsta
        </h1>
      </CardHeader>
      <CardBody>
        <p className="text-center text-sm mt-2">
          Enter your verification code here
        </p>
        <form className="flex flex-col gap-6 items-center">
          <InputOtp length={6} variant="flat" />
          <Button
            className="w-full mt-4"
            color="primary"
            size="sm"
            onClick={() => {
              router.push("/onboard");
            }}
          >
            Verify
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default Page;
