import { createNewPostService, getAllPostService, editPostService, deletePostService } from "../services/postServices";

export let createNewPost = async (req, res, next) => {
  const data = await createNewPostService(req.body);

  return res.status(200).json({
    message: data.errMessage,
    response: data ? data : {},
  });
};

export let getAllPost = async (req, res, next) => {
  const data = await getAllPostService(req.query.limit);

  return res.status(200).json({
    errCode: data.errCode,
    message: data.errMessage,
    response: data ? data : {},
  });
};

export let editPost = async (req, res) => {
  const data = await editPostService(req.body);

  return res.status(200).json({
    errCode: data.errCode,
    message: data.errMessage,
    response: data ? data : {},
  });
}

export let deletePost = async (req, res) => {
  const data = await deletePostService(req.body);

  return res.status(200).json({
    errCode: data.errCode,
    message: data.errMessage,
    response: data ? data : {},
  });
}