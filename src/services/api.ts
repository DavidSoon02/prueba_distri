import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.amiiboapi.com/api/amiibo/?character=Mario',
});

export default api;
