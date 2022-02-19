import db from "../models/index";

export let createNewPostService = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.title || !data.description) {
        resolve({
          errCode: -1,
          status: "Failed",
          message: "Missing parameters!!!",
          data: {},
        });
        return;
      }

      let result = await db.Post.create({
        title: data.title,
        description: data.description,
      });

      if (result) {
        resolve({
          errCode: 0,
          status: "success",
          message: "Created!!!",
          data: data,
        });
      } else {
        resolve({
          errCode: -2,
          status: "success",
          message: "Can't add posts!!!",
          data: {},
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

export let getAllPostService = async (limit) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result;
        if (!limit) {
          result = await db.Post.findAll({});
          resolve({
            status: "success",
            message: "Get all posts!!!",
            data: result,
          });
        }
        
        result = await db.Post.findAll({
          limit: +limit
        })

        resolve({
          status: "success",
          message: "Get all posts!!!",
          data: result,
        });

    } catch (error) {
      reject(error);
    }
  });
};

export let editPostService = async(data) => {
  return new Promise(async (resolve, reject) => {
    try {

      if (!data.post_id || !data.title || !data.description) {
        resolve({
          status: "failed",
          message: "Missing parameters!!!",
          data: {},
        });
        return;
      }

      let result = await db.Post.findOne(
        { where: { id: data.post_id } }
      )

      if (result) {

        result.title = data.title;
        result.description = data.description;

        await result.save();

        resolve({
          status: "success",
          message: "update failed!!!",
          data: result,
        });
      } else {
        resolve({
          status: "failed",
          message: "update failed!!!",
          data: {},
        });
      }

      resolve({
        status: "success",
        message: "Get all posts!!!",
        data: data,
      });
    } catch (error) {
      reject(error);
    }
  });
}

export let deletePostService = async(data) => {
  return new Promise(async (resolve, reject) => {
    try {

      if (!data.post_id) {
        resolve({
          status: "failed",
          message: "Missing parameters!!!",
          data: {},
        });
        return;
      }

      let result = await db.Post.findOne({ where: { id: data.post_id } });

      if (result) {
        let checkDelete = await result.destroy();

        if (checkDelete) {
          resolve({
            status: "success",
            message: "Delete posts!!!",
            data: {
              check_delete: true
            },
          });
        } else {
          resolve({
            status: "failed",
            message: "delete posts failed!!!",
            data: {
              check_delete: true
            },
          });
        }
      }

      
    } catch (error) {
      reject(error);
    }
  });
}