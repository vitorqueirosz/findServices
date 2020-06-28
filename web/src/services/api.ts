import axios, { AxiosRequestConfig } from 'axios';

interface Token {
    token: string;
};


const api = axios.create({
    baseURL: 'http://localhost:3333',
    
});


api.interceptors.request.use((config: AxiosRequestConfig) => {
    try {
        const token = localStorage.getItem('token');

        
        if (token) {
            config.headers.Authorization  = `Bearer ${token}`;
        };

        return config;
        
    } catch (err) {
        console.log(err)
    }
    
    return config;
        
});



export default api;