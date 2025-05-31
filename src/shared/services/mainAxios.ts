import axios from 'axios';

const mainAxios = axios.create({
    baseURL: process.env.BACK_API_URL,
    withCredentials: false,
});

mainAxios.interceptors.request.use((config) => {
    config.params = { ...config.params, apiKey: process.env.API_KEY };

    return config;
});

mainAxios.interceptors.response.use(
    (res) => {},
    (error) => {
        return Promise.resolve(error);
    },
);
export default mainAxios;
