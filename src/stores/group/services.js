import axios from "axios";

import { API_URL } from "../../config";

export function __getAllGroupList(token) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/groupList`, {
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

export function __deleteGroupAndContact(id, token) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/deleteContactByGroup/${id}`, {
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
