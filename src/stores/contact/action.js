import { SET_CONTACT } from "./constants";
import {
  __addContact,
  __getContactBygroup,
  __getContactById,
  __updateContactDetails,
  __deleteGroupAndContact,
} from "./services";

export function setAllContact(payload) {
  return {
    type: SET_CONTACT,
    payload: payload,
  };
}

export const getAllContactByGroup = (id) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const { token } = getState().auth;
    __getContactBygroup(id, token)
      .then((response) => {
        dispatch(setAllContact(response));
        resolve(true);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(() => {});
  });
};

export const getOneContact = (id) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const { token } = getState().auth;
    __getContactById(id, token)
      .then((response) => {
        dispatch(getAllContactByGroup());
        resolve(true);
      })
      .catch((error) => {
        reject(error);
      })
      .finally(() => {});
  });
};

export const addContact = (formData, groupId) => (dispatch, getState) => {
  // console.log(formData);
  return new Promise((resolve, reject) => {
    const { token } = getState().auth;
    __addContact(formData, token)
      .then((response) => {
        dispatch(getAllContactByGroup(groupId));
        resolve(true);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(() => {});
  });
};

export const updateContact =
  (formData, id, groupId) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const { token } = getState().auth;
      __updateContactDetails(formData, id, token)
        .then((response) => {
          dispatch(getAllContactByGroup(groupId));
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {});
    });
  };

export const deleteContatAndGroup = (id, groupId) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const { token } = getState().auth;
    __deleteGroupAndContact(id, token)
      .then((response) => {
        dispatch(getAllContactByGroup(groupId));
        resolve(true);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(() => {});
  });
};
