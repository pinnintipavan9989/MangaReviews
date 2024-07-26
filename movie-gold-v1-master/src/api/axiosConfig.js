import axios from 'axios';
// just checking
const baseURL = 'https://glittery-crepe-1d6589.netlify.app/'; // New base URL

const api = axios.create({
    baseURL: baseURL,
    headers: {"ngrok-skip-browser-warning": "true"}
});

export default api;
