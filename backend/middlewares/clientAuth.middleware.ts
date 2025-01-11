import { Request, Response, NextFunction } from "express";
import { verifyAuthJWTtoken } from "../src/client/services/auth.service";
import { CustomRequest } from "../types/globl.types";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { authToken } = req.cookies;
    if (!authToken) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    const user = verifyAuthJWTtoken(authToken);
    if (!user || !user.email || !user.id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const request = req as CustomRequest;
    request.user = user;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export { authMiddleware };
