import axios from "axios";

import { API_URL } from "../../config";

export function __login(formData){
    return new Promise((resolve, reject) => {
        axios
        .post(`${API_URL}/user/login`, formData)
        .then(async (response) => {
            resolve(response.data);
        })
        .catch((err) => {
            reject(err);
        });
    })
}