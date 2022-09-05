import axios from "axios";

import { API_URL } from "../../config";

export function __addGroup(formData, token) {
  console.log(formData);
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/uploadCsvByGroup`, formData, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function __getAllGroupList(token) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/groupList`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function __updateGroup(formData, id, token) {
  console.log(formData);
  return new Promise((resolve, reject) => {
    axios
      .put(`${API_URL}/group/${id}`, formData, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        console.log(response);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function __deleteGroupAndContact(id, token) {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${API_URL}/deleteContactByGroup/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
