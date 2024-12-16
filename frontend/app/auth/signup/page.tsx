import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Link from "next/link";

import SignUpFrom from "./components/SignUpForm";

const page = () => {
  return (
    <Card className="md:w-1/2 w-10/12 rounded-md">
      <CardHeader className=" flex justify-center items-center">
        <h1 className="text-xl  font-semibold text-center">
          Welcome to XInsta
        </h1>
      </CardHeader>
      <CardBody>
        <SignUpFrom />
        <p className="text-center text-sm mt-2">
          Already have an account?{" "}
          <Link className="text-blue-600" href="/auth/login">
            Login
          </Link>
        </p>
      </CardBody>
    </Card>
  );
};

export default page;
