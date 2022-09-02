import { SET_GROUP } from "./constants";
import {
  __addGroup,
  __getAllGroupList,
  __deleteGroupAndContact,
  __updateGroup,
} from "./services";

export function setAllGroups(payload) {
  return {
    type: SET_GROUP,
    payload: payload,
  };
}

export const addGroup = (formData) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const { token } = getState().auth;
    __addGroup(formData, token)
      .then((response) => {
        dispatch(getAllGroup());
        resolve(true);
      })
      .catch((error) => {
        reject(error);
      })
      .finally(() => {});
  });
};

export const getAllGroup = () => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const { token } = getState().auth;
    __getAllGroupList(token)
      .then((response) => {
        dispatch(setAllGroups(response));
      })
      .catch((err) => {
        reject(err);
      })
      .finally(() => {});
  });
};

export const updateGroup = (formData, id) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const { token } = getState().auth;
    __updateGroup(formData, id, token)
      .then((response) => {
        dispatch(getAllGroup());
        resolve(true);
      })
      .catch((error) => {
        reject(error);
      })
      .finally(() => {});
  });
};

// export const getSingleGroup =() => (dispatch, getState) => {
//   return new Promise((resolve, reject) => {
//     __getGroupListById(token)
//   })
// }

export const deleteGroupAndContact = (id) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const { token } = getState().auth;
    __deleteGroupAndContact(id, token)
      .then(async (response) => {
        dispatch(getAllGroup());
        resolve(true);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(() => {});
  });
};
