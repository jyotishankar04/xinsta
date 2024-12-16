// Global error handler

import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";

const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.status || 500;
  const message = err.message || "Something went wrong";
  res.status(statusCode).json({
    success: false,
    message,
  });
};

export default globalErrorHandler;
