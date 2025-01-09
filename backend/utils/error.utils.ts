import { ZodError } from "zod";

const getZodErrorMessage = ({ error }: { error: ZodError }) => {
  return error.errors[0].message;
};
export { getZodErrorMessage };
