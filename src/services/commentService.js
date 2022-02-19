import db from "../models/index";

export let createNewCommentService = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {

      if (!data.content || !data.post_id) {
        resolve({
          errCode: -1,
          status: "failed",
          message: "Missing parameters!!!",
          data: {},
        });
        return;
      }

      let result = await db.Comment.create({
        post_id: data.post_id,
        content: data.content
      })

      if (result) {
        resolve({
          errCode: 0,
          status: "success",
          message: "Created!!!",
          data: result,
        });
      }

    } catch (error) {
      reject(error);
    }
  });
};


export let getAllCommentService = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {

      if (!data.post_id) {
        resolve({
          errCode: 0,
          status: "failed",
          message: "Missing parameters!!!",
          data: {},
        });
        return;
      }

      let result = await db.Post.findAll({
        where: { id: data.post_id },
        attributes: {
          exclude: ["title", "description", "createdAt", "updatedAt"],
        },
        include: [
          {
            model: db.Comment,
            as: "comment_data"
          }
        ],
      });

      if (result) {
        resolve({
          errCode: 0,
          status: "success",
          message: "All comments of this post!!!",
          data: result,
        });
      }

    } catch (error) {
      reject(error);
    }
  });
};