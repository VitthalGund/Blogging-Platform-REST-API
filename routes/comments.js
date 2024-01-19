import express from "express";
import { getComments, addComment, updateComment, deleteComment } from "../controllers/comment.js";

const router = express.Router();

router.get("/:id", getComments); // This will get all comments for a post
router.post("/:id", addComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

export default router;
