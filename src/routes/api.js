import express from "express";
import { createNewPost, getAllPost, editPost, deletePost } from "../controllers/Post.controller";
import { createNewComment, getAllComments } from "../controllers/Comment.controller";

const router = express.Router();

const initWebRoutes = (app) => {
  // Post controller
  router.post("/api/posts", createNewPost);
  router.get("/api/get-all-posts", getAllPost);
  router.put("/api/edit-post", editPost);
  router.delete("/api/delete-post", deletePost);

  // Comment controller
  router.post("/api/create-new-comment", createNewComment);
  router.get("/api/get-all-comments", getAllComments);

  return app.use("/", router);
};

module.exports = initWebRoutes;
