import axios from "axios";

import { API_URL } from "../../config";

export function __addBlog(formData, token) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/blog`, formData, {
        headers: {
          authorization: token,
        },
      })
      .then(async (response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function __getAllBlog(token) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/blog`, {
        headers: {
          authorization: token,
        },
      })
      .then(async (response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function __deleteBlog(id, token) {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${API_URL}/blog/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then(async (response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function __getOneBlog(id, token) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/blog/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then(async (response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function __updateBlog(formData, id, token) {
  return new Promise((resolve, reject) => {
    axios
      .put(`${API_URL}/blog/${id}`, formData, {
        headers: {
          authorization: token,
        },
      })
      .then(async (response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
