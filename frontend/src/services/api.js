import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-week-6.herokuapp.com'
});

export default api;