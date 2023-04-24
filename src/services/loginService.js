import axios from "axios";

const BASE_URL = 'https://three-points.herokuapp.com/api/login';

export const login = async (info) => {
    const {user, password} = info;

    return axios.post(BASE_URL, {
        username: user,
        password,
    });
}