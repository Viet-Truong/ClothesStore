import axios from 'axios';

const request = axios.create({
    baseURL: 'http://192.168.1.153:8000/api/',
});

export const get = async (path, options = {}) => {
    try {
        const response = await request.get(path, options);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const post = async (path, data, options = {}) => {
    const response = await request.post(path, data, options);
    return response.data;
};

export const put = async (path, data, options = {}) => {
    const response = await request.put(path, data, options);
    return response.data;
};

axios.interceptors.request.use((request) => {
    console.log('Starting Request', JSON.stringify(request, null, 2));
    return request;
});

