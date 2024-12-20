import { config as dotenv } from "dotenv";

dotenv();

const config = {
  PORT: process.env.PORT,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  COUDINARY_URL: process.env.CLOUDINARY_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  MAILTRAP_HOST: process.env.MAILTRAP_HOST,
  MAILTRAP_TOKEN: process.env.MAILTRAP_TOKEN,
  MAILTRAP_ACCOUNT_ID: process.env.MAILTRAP_ACCOUNT_ID,
  APP_URL: process.env.APP_URL,
};
export const _config = Object.freeze(config);
