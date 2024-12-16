import { NextFunction, Request, Response } from "express";

class AuthController {
  async signUp(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { username, password } = req.body;

      // Simulating user sign up process
      const user = { username, password };
      res.status(200).json({ success: true, user });
    } catch (error) {
      throw new Error("Failed to sign up user");
    }
  }
}

export default new AuthController();
