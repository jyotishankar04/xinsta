import { config as dotenv } from "dotenv";

dotenv();

const config = {
  PORT: process.env.PORT,
};
export const _config = Object.freeze(config);
