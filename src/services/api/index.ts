import axios from 'axios';

export const getBaseUrl = (): string => {
    return 'https://swapi.py4e.com/api/';
};

const restApi = axios.create();

restApi.interceptors.request.use(
    async (config) => {
        const baseUrl = await getBaseUrl();
        config.baseURL = baseUrl;
        return config;
    },
    (error) => Promise.reject(error),
);

export default restApi;
