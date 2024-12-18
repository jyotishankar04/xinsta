"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6 items-center w-full max-w-sm mx-auto p-4 sm:p-6">
      <Input placeholder="Username" type="text" variant="underlined" />
      <Input placeholder="Email" type="email" variant="underlined" />
      <Input placeholder="Name" type="text" variant="underlined" />
      <Input placeholder="Password" type="password" variant="underlined" />
      <Input
        placeholder="Confirm Password"
        type="password"
        variant="underlined"
      />

      <Button
        className="w-full sm:w-auto px-4 py-2"
        color="primary"
        size="sm"
        onClick={() => {
          router.push("/auth/email-verification");
        }}
      >
        Continue with username
      </Button>
    </div>
  );
};

export default SignUpForm;
