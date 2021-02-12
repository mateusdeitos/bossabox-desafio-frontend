import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});

export default api;
