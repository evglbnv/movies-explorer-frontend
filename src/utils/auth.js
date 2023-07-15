import { BASE_URL } from '../utils/constants';

const getResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Error : ${res.status}`)
}

export const register = (data) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(getResponse);
}


export const login = (data) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(getResponse)
}

export const checkTokenVerifcation = async () => {
    const token = localStorage.getItem('token')
    return await fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`,
      },
    }).then((res) => getResponse(res));
  };