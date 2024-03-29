import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import { verifyJWT } from "./middleware/verify.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(verifyJWT)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/posts/comments", commentRoutes); // Use the new comment routes


app.listen(3500, () => {
  console.log("Connected!");
});
