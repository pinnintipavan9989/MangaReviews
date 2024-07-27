import axios from 'axios';
//just checking
const baseURL = 'https://localhost:8080'; // New base URL

const api = axios.create({
    baseURL: baseURL,
    headers: {"ngrok-skip-browser-warning": "true"}
});

export default api;