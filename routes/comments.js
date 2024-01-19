import express from "express";
import { getComments, addComment, updateComment, deleteComment } from "../controllers/comment.js";

const router = express.Router();

router.get("/", getComments); // This will get all comments for a post
router.post("/", addComment);
router.put("/:commentId", updateComment);
router.delete("/:commentId", deleteComment);

export default router;
