import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1', // Replace with your API base URL
})

export default api;