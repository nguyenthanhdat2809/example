import { createNewCommentService, getAllCommentService } from "../services/commentService";

export let createNewComment = async (req, res) => {
  const data = await createNewCommentService(req.body);

  return res.status(200).json({
    message: data.errMessage,
    response: data ? data : {},
  });
};

export let getAllComments = async (req, res) => {
  const data = await getAllCommentService(req.query);

  return res.status(200).json({
    message: data.errMessage,
    response: data ? data : {},
  });
}