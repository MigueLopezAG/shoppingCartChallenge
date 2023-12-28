import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

const getProducts = () => {
    return axios.get(`${API_URL}/products`);
}

const getPrices = () => {
    return axios.get(`${API_URL}/prices`);
}

const getStock = () =>{
    return axios.get(`${API_URL}/stock`);
}

export const API = {
    getProducts,
    getPrices,
    getStock
}