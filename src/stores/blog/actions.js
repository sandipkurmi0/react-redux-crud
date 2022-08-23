import { SET_BLOG } from "./constants";
import {
  __addBlog,
  __deleteBlog,
  __getAllBlog,
  __getOneBlog,
  __updateBlog,
} from "./services";

export function setAllBlog(payload) {
  return {
    type: SET_BLOG,
    payload: payload,
  };
}

export const addBlog = (formData) => (dispatch, getState) => {
  console.log(formData);
  return new Promise((resolve, reject) => {
    const { token } = getState().auth;
    __addBlog(formData, token)
      .then(async (response) => {
        dispatch(getAllBlog());
        resolve(true);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(() => {
        //dispatch(loginSetLoading(false));
      });
  });
};

export const updateBlog = (formData, id) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const { token } = getState().auth;
    __updateBlog(formData, id, token)
      .then(async (response) => {
        dispatch(getAllBlog());
        resolve(true);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(() => {
        //dispatch(loginSetLoading(false));
      });
  });
};

export const getAllBlog = () => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const { token } = getState().auth;
    __getAllBlog(token)
      .then(async (response) => {
        dispatch(setAllBlog(response));
      })
      .catch((err) => {
        reject(err);
      })
      .finally(() => {});
  });
};

export const deleteBlog = (id) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const { token } = getState().auth;
    __deleteBlog(id, token)
      .then(async (response) => {
        dispatch(getAllBlog());
        resolve(true);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(() => {});
  });
};
