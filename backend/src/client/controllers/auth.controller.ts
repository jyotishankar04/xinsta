import z from "zod";
import { NextFunction, Request, Response } from "express";
import {
  otpVerificationSchema,
  registerSchema,
} from "../../../utils/client.validator";
import createHttpError from "http-errors";
import {
  emailVerificationProcess,
  generateOTP,
  getAuthJWTtoken,
  gethashedPassword,
  getResetPasswordToken,
  validatePassword,
} from "../services/auth.service";
import prisma from "../../../config/prisma.config";
import { sendEmail } from "../../../config/mailtrap.config";
import {
  getResetPasswordPage,
  getResetPasswordTemplate,
  getVerificationCodeTemplate,
  resetSuccessfullPage,
} from "../../../constants/email.template";
import { _config } from "../../../config/envConfig";

const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { name, email, password } = req.body;
    const validator = registerSchema.safeParse({
      name,
      email,
      password,
    });
    if (!validator.success) {
      return next(createHttpError(400, validator.error.message));
    }
    const isUserExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (isUserExists) {
      return next(createHttpError(400, "User already exists"));
    }
    const hashedPassword = await gethashedPassword({ password });
    const username = email.split("@")[0];
    const otp = generateOTP();

    await sendEmail({
      to: [email],
      subject: "Verification Email",
      html: getVerificationCodeTemplate(otp),
      category: "Verification Test",
    });

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        username,
        verifyPasswordExpires: new Date(Date.now() + 5 * 60 * 1000),
        verifyPasswordToken: otp,
      },
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        avatar: true,
        isVerified: true,
      },
    });
    if (!user) {
      next(createHttpError(400, "Failed to sign up user"));
    }

    return res.status(201).json({
      success: true,
      message: "User signed up successfully",
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          username: user.username,
          avatar: user.avatar,
          isVerified: user.isVerified,
        },
        redirectUrl: "/email-verification?email=" + email,
      },
    });
  } catch (error) {
    return next(createHttpError(500, "Failed to sign up user"));
  }
};

////////////////////////////////////////////////////////////////
// Implementation of verification routes

const verifyEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { email, otp } = req.body;
    const validator = otpVerificationSchema.safeParse({
      otp,
    });
    if (!validator.success) {
      return next(createHttpError(400, validator.error.message));
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        isVerified: true,
        name: true,
        email: true,
        username: true,
        avatar: true,
        verifyPasswordToken: true,
        verifyPasswordExpires: true,
        bio: true,
        dob: true,
        lastLogin: true,
      },
    });
    if (!user) {
      return next(createHttpError(400, "User not found"));
    }
    if (user.isVerified) {
      return next(createHttpError(400, "Email already verified"));
    }
    if (user.verifyPasswordToken !== otp) {
      return next(createHttpError(400, "Invalid OTP"));
    }
    if (user.verifyPasswordExpires && user.verifyPasswordExpires < new Date()) {
      await prisma.user.update({
        where: {
          email,
        },
        data: {
          verifyPasswordToken: null,
          verifyPasswordExpires: null,
        },
      });
      return next(createHttpError(400, "OTP expired"));
    }

    await prisma.user.update({
      where: {
        email,
      },
      data: {
        isVerified: true,
        verifyPasswordToken: null,
        verifyPasswordExpires: null,
      },
    });

    const token = getAuthJWTtoken({
      id: user.id,
      email: user.email,
    });
    res.cookie("authToken", token, {
      httpOnly: true,
      sameSite: "none",
    });
    return res.status(200).json({
      success: true,
      message: "Email verified successfully",
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          username: user.username,
          avatar: user.avatar,
          isVerified: user.isVerified,
          bio: user.bio,
          dob: user.dob,
          lastLogin: user.lastLogin,
        },
        redirectUrl: "/",
      },
    });
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Failed to verify email"));
  }
};

const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        avatar: true,
        isVerified: true,
        password: true,
      },
    });
    if (!user) {
      return next(createHttpError(400, "User not found"));
    }
    if (!user.isVerified) {
      if ((await emailVerificationProcess(user.email)) === false) {
        return next(
          createHttpError(
            400,
            "Failed to send verification email, please try again"
          )
        );
      }
      return res.status(200).json({
        success: true,
        message: "OTP sent successfully! Please verify your email",
        data: {
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            username: user.username,
            avatar: user.avatar,
            isVerified: user.isVerified,
          },
          redirectUrl: "/email-verification?email=" + user.email,
        },
      });
    }
    const isPasswordValid = await validatePassword(password, user.password);
    if (!isPasswordValid) {
      return next(createHttpError(400, "Invalid password"));
    }
    const token = getAuthJWTtoken({
      id: user.id,
      email: user.email,
    });
    res.cookie("authToken", token, {
      httpOnly: true,
      sameSite: "none",
    });
    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          username: user.username,
          avatar: user.avatar,
          isVerified: user.isVerified,
        },
        redirectUrl: "/",
      },
    });
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Failed to login user"));
  }
};
const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { email } = req.body;
    const validate = z.object({
      email: z.string().email(),
    });
    const { error } = validate.safeParse({ email });
    if (error) {
      return next(createHttpError(400, error.message));
    }
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        avatar: true,
        isVerified: true,
      },
    });

    if (!user) {
      return next(createHttpError(400, "User not found"));
    }

    const token = getResetPasswordToken();

    await prisma.user.update({
      where: {
        email,
      },
      data: {
        resetPasswordToken: token,
        resetPasswordExpires: new Date(Date.now() + 15 * 60 * 1000),
      },
    });

    // Generate the password reset URL with the token
    const resetLink = `${_config.APP_URL}/api/v1/auth/reset-password/${token}`;
    await sendEmail({
      to: [user.email],
      subject: "Password Reset",
      html: getResetPasswordTemplate(resetLink),
      category: "Password Reset",
    });
    return res.status(200).json({
      success: true,
      message: "Password reset email sent successfully",
    });

    // You can also send an email here, as mentioned in the comment.

    // Return HTML response for the password reset page
    // const htmlResponse = `
    //   <html>
    //     <head>
    //       <title>Reset Password</title>
    //       <style>
    //         body {
    //           font-family: Arial, sans-serif;
    //           background-color: #f7f9fc;
    //           padding: 0;
    //           margin: 0;
    //           color: #333;
    //         }
    //         .container {
    //           max-width: 450px;
    //           margin: 50px auto;
    //           background-color: #ffffff;
    //           padding: 20px;
    //           border-radius: 8px;
    //           box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    //           text-align: center;
    //         }
    //         h2 {
    //           color: #4a90e2;
    //           font-size: 24px;
    //           margin-bottom: 20px;
    //         }
    //         .header {
    //           background: #f4f4f4;
    //           text-align: center;
    //           padding: 20px;
    //         }
    //         .logo {
    //           font-size: 36px;
    //           font-weight: bold;
    //           line-height: 1;
    //         }
    //         .logo .x {
    //           color: #007BFF;
    //           font-size: 48px;
    //         }
    //         .logo .a {
    //           color: #FF0000;
    //           font-size: 48px;
    //           position: relative;
    //           bottom: -10px;
    //         }
    //         input {
    //           width: 90%;
    //           padding: 12px;
    //           margin: 10px 0;
    //           border: 1px solid #ddd;
    //           border-radius: 4px;
    //           font-size: 16px;
    //         }
    //         button {
    //           width: 100%;
    //           padding: 12px;
    //           background-color: #4a90e2;
    //           color: white;
    //           border: none;
    //           border-radius: 4px;
    //           font-size: 16px;
    //           cursor: pointer;
    //           transition: background-color 0.3s;
    //         }
    //         button:hover {
    //           background-color: #357ab7;
    //         }
    //         .footer {
    //           margin-top: 20px;
    //           font-size: 12px;
    //           color: #888;
    //         }
    //         #form{
    //           display: flex;
    //           flex-direction: column;
    //           justify-content:center ;
    //           /* align-items: center; */

    //         }
    //       </style>
    //     </head>
    //     <body>
    //       <div class="container">
    //         <div class="header">
    //           <div class="logo">
    //             <span class="x">X</span>Inst<span class="a">a</span>
    //           </div>
    //         </div>
    //         <h2>Reset Your Password</h2>
    //         <p>Enter a new password to reset your account password.</p>
    //         <form id="form" action="/api/v1/auth/reset-password/${token}" method="POST">
    //           <div>
    //             <label for="password">New Password</label>
    //             <input type="password" id="password" name="password" required />
    //           </div>
    //           <div>
    //             <label for="confirmPassword">Confirm Password</label>
    //             <input type="password" id="confirmPassword" name="confirmPassword" required />
    //           </div>
    //           <button type="submit">Update Password</button>
    //         </form>
    //         <div class="footer">
    //           <p>If you didn't request a password reset, please ignore this email.</p>
    //         </div>
    //       </div>
    //     </body>
    //   </html>
    // `;
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Failed to reset password"));
  }
};

const resetPasswordPage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { token } = req.params;

    const htmlResponse = getResetPasswordPage({ token });

    return res.status(200).send(htmlResponse);
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Failed to reset password"));
  }
};

const handlePasswordResetSubmit = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { token } = req.params;
    const { password, confirmPassword } = req.body;
    if (!password || !confirmPassword) {
      return next(createHttpError(400, "Password is required"));
    }
    if (password !== confirmPassword) {
      return next(createHttpError(400, "Passwords do not match"));
    }
    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: token,
      },
    });

    if (!user) {
      return next(createHttpError(400, "Invalid token"));
    }
    if (user.resetPasswordExpires && user.resetPasswordExpires < new Date()) {
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          resetPasswordToken: null,
          resetPasswordExpires: null,
        },
      });
      return next(createHttpError(400, "Token expired"));
    }
    if (user.resetPasswordToken !== token) {
      return next(createHttpError(400, "Invalid token"));
    }
    const hashedPassword = await gethashedPassword({ password });

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashedPassword,
        resetPasswordToken: null,
        resetPasswordExpires: null,
      },
    });
    await sendEmail({
      to: [user.email],
      subject: "Password Reset Successful",
      html: resetSuccessfullPage(),
    });
    res.status(200).send(resetSuccessfullPage());
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Failed to reset password"));
  }
};

export default {
  signUp,
  verifyEmail,
  login,
  resetPassword,
  resetPasswordPage,

  handlePasswordResetSubmit,
};
