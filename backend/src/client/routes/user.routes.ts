import express from "express";
import { authMiddleware } from "../../../middlewares/clientAuth.middleware";

const router = express.Router();

router.use(authMiddleware);

router.put("/");

export default router;
