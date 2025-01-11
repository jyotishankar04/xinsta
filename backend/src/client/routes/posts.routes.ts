import { Router } from "express";
import { getAllPosts, uploadPost } from "../controllers/post.controller";
import { authMiddleware } from "../../../middlewares/clientAuth.middleware";
import { upload } from "../../../middlewares/multer.mddleware";

const router = Router();

//  Public routes

router.get("/", getAllPosts);

// Post routes
router.post(
  "/",
  authMiddleware,
  upload.fields([{ name: "postImages", maxCount: 3 }]),
  uploadPost
);
// router.get("/post");
// router.patch("/post/:id");
// router.delete("/post/:id");

export default router;
