
import axios from 'axios';

// Set the base URL for your API
axios.defaults.baseURL = 'https://api.uncappedtheory.com/api/v1/';

// Add a request interceptor to attach the token to all requests
const axiosAuthMiddleware = {
    initialize: () => {
        axios.interceptors.request.use(
            (config: any) => {
                const token = localStorage.getItem('accessToken'); // Retrieve the token from storage
                if (token) {
                    if (!config.headers) {
                        config.headers = {};
                    }
                    config.headers.Authorization = `Bearer ${token}`; // Attach the token as an Authorization header
                    // config.headers.Accept = "application/json"; // Attach the token as an Authorization header
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }
};

export default axiosAuthMiddleware; 
