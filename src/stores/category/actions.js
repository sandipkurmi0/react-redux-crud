import { SET_CATEGORY } from "./constants";
import { __addCategory, __getAllCategory, __updateCategory, __deleteCategory } from "./services"

export function setAllCategories(payload) {
    return {
      type: SET_CATEGORY,
      payload: payload,
    };
}

export const addCategory = (formData) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        const {token} = getState().auth;
        // dispatch(loginSetLoading(true));
        __addCategory(formData, token).then(async (response) => {
            dispatch(getAllCategory())
            resolve(true);
        }).catch((err) => {
          reject(err)
        }).finally(() => {
          //dispatch(loginSetLoading(false));
        })
    })
}

export const updateCategory = (formData,id) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
      const {token} = getState().auth;
      // dispatch(loginSetLoading(true));
      __updateCategory(formData,id, token).then(async (response) => {
          dispatch(getAllCategory())
          resolve(true);
      }).catch((err) => {
        reject(err)
      }).finally(() => {
        //dispatch(loginSetLoading(false));
      })
  })
}

export const getAllCategory = () => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const {token} = getState().auth;
    __getAllCategory(token).then(async (response) => {
        dispatch(setAllCategories(response))
    }).catch((err) => {
      reject(err)
    }).finally(() => {
      
    })
  })
}

export const deleteCategory = (id) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
      const {token} = getState().auth;
      __deleteCategory(id, token).then(async (response) => {
          dispatch(getAllCategory())
          resolve(true);
      }).catch((err) => {
        reject(err)
      }).finally(() => {
      })
  })
}