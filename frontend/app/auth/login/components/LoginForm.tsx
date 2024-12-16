"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import ResetPasswordModel from "./ResetPasswordModel";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-6 items-center">
      <Input placeholder="Email" type="email" variant="underlined" />
      <Input placeholder="Password" type="password" variant="underlined" />
      <Button className="w-full mt-4" color="primary" size="sm">
        Sign In
      </Button>
      <div>
        <ResetPasswordModel />
      </div>
    </form>
  );
};

export default LoginForm;
