import axios from "axios";

export const clienteAxios = axios.create({
    baseURL: 'https://young-meadow-32467.herokuapp.com'
});