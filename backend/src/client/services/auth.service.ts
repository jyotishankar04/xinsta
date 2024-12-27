import crypto from "crypto";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { _config } from "../../../config/envConfig";
import { sendEmail } from "../../../config/mailtrap.config";
import { getVerificationCodeTemplate } from "../../../constants/email.template";
import prisma from "../../../config/prisma.config";
import { NextFunction, Request, Response } from "express";

const generateOTP = () => {
  return crypto.randomInt(100000, 1000000).toString();
};

const gethashedPassword = async ({
  password,
}: {
  password: string;
}): Promise<string> => {
  const salt = await bcrypt.genSalt(10);

  return await bcrypt.hash(password, salt);
};
const validatePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

const getAuthJWTtoken = ({ id, email }: { id: string; email: string }) => {
  const payload = { id, email };
  return jwt.sign(payload, String(_config.JWT_SECRET), { expiresIn: "365d" });
};
const verifyAuthJWTtoken = (
  token: string
): { id: string; email: string } | null => {
  try {
    const { id, email } = jwt.verify(token, String(_config.JWT_SECRET)) as {
      id: string;
      email: string;
    };
    return { id, email };
  } catch (error) {
    return null;
  }
};

const getResetPasswordToken = () => {
  return crypto.randomBytes(16).toString("hex");
};

const emailVerificationProcess = async (email: string): Promise<boolean> => {
  try {
    const otp = generateOTP();
    sendEmail({
      to: [email],
      subject: "Verification Email",
      html: getVerificationCodeTemplate(otp),
      category: "Integration Test",
    });
    await prisma.user.update({
      where: {
        email,
      },
      data: {
        verifyPasswordToken: otp,
        verifyPasswordExpires: new Date(Date.now() + 15 * 60 * 1000),
      },
    });
    return true;
  } catch (error) {
    console.error("Failed to send verification email", error);
    return false;
  }
};

const logoutUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    res.clearCookie("authToken");
    res
      .status(200)
      .json({ success: true, message: "User logged out successfully" });
  } catch (error) {
    next(error);
  }
};

export {
  generateOTP,
  gethashedPassword,
  validatePassword,
  getAuthJWTtoken,
  verifyAuthJWTtoken,
  emailVerificationProcess,
  getResetPasswordToken,
  logoutUser,
};
