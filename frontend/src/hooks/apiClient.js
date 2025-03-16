import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.BACKEND_API_URL || 'http://0.0.0.0:8000',
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        const customError = new Error(error.response?.data?.message || 'An error occurred');
        return Promise.reject(customError);
    }
);

export default apiClient;