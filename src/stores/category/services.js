import axios from "axios";

import { API_URL } from "../../config";

export function __addCategory(formData, token){
    return new Promise((resolve, reject) => {
        axios
        .post(`${API_URL}/category`, formData, {
            headers:{
                authorization: token
            }
          })
        .then(async (response) => {
            resolve(response.data);
        })
        .catch((err) => {
            reject(err);
        });
    })
}

export function __getAllCategory(token){
    return new Promise((resolve, reject) => {
        axios
        .get(`${API_URL}/category`, {
            headers:{
                authorization: token
            }
        })
        .then(async (response) => {
            resolve(response.data);
        })
        .catch((err) => {
            reject(err);
        });
    })
}


export function __deleteCategory(id,token){
    console.log(token);
    return new Promise((resolve, reject) => {
        axios
        .delete(`${API_URL}/category/${id}`,{
            headers:{
                authorization: token
            }
        })
        .then(async (response) => {
            resolve(response.data);
        })
        .catch((err) => {
            reject(err);
        });
    })
}

export function __getOneCategory(id, token){
    return new Promise((resolve, reject) => {
        axios
        .get(`${API_URL}/category/${id}`, {
            headers:{
                authorization: token
            }
        })
        .then(async (response) => {
            resolve(response.data);
        })
        .catch((err) => {
            reject(err);
        });
    })
}

export function __updateCategory(formData, id,token){
    return new Promise((resolve, reject) => {
        axios
        .put(`${API_URL}/category/${id}`, formData, {
            headers:{
                authorization: token
            }
        })
        .then(async (response) => {
            resolve(response.data);
        })
        .catch((err) => {
            reject(err);
        });
    })
}