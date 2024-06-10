import axios from 'axios';

const api = axios.create({
    baseURL: 'http://your-backend-url.com', // Replace with your backend URL
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;