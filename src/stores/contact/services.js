import axios from "axios";

import { API_URL } from "../../config";

//add single contact by groupId

export function __addContact(formData, token) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/contact`, formData, {
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

//get all contact by group
export function __getContactBygroup(id, token) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/getContactBygroup/${id}`, {
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

//get one contact by id
export function __getContactById(id, token) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/contact/${id}`, {
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

//edit single contact
export function __updateContactDetails(formData, id, token) {
  console.log(formData);
  return new Promise((resolve, reject) => {
    axios
      .put(`${API_URL}/contact/${id}`, formData, {
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

//delete contact
export function __deleteGroupAndContact(id, token) {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${API_URL}/contact/${id}`, {
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
