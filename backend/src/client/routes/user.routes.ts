import express from "express";
import { authMiddleware } from "../../../middlewares/clientAuth.middleware";
import { updateUser } from "../controllers/user.controller";
import { upload } from "../../../middlewares/multer.mddleware";

const router = express.Router();

router.use(authMiddleware);

router.put("/", upload.fields([{ name: "avatar", maxCount: 1 }]), updateUser);

export default router;
