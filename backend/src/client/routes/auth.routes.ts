import express from "express";
import authController from "../controllers/auth.controller";
const router = express.Router();

router.post("/register", authController.signUp);
router.post("/email-verification", authController.verifyEmail);
router.post("/login", authController.login);
router.put("/reset-password", authController.resetPassword);
router.get("/reset-password/:token", authController.resetPasswordPage);

router.post("/reset-password/:token", authController.handlePasswordResetSubmit);
export default router;
