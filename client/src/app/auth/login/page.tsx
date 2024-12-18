import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Link from "next/link";

import LoginForm from "./components/LoginForm";

const page = () => {
  return (
    <Card className="md:w-1/2 w-10/12 rounded-md">
      <CardHeader className=" flex justify-center items-center">
        <h1 className="text-xl  font-semibold text-center">
          Welcome to XInsta
        </h1>
      </CardHeader>
      <CardBody>
        <LoginForm />
        <p className="text-center text-sm mt-2">
          Don&apos;t have an account?{" "}
          <Link className="text-blue-600" href="/auth/signup">
            Sign up now
          </Link>
        </p>
      </CardBody>
    </Card>
  );
};

export default page;
