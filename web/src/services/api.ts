<<<<<<< HEAD
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



=======
import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:3333'
});

>>>>>>> 19bfc48d40c61414300bdedd1c3789b94c08fd2d
export default api;