import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTcwNjcyMjEsImV4cCI6MTYxOTY1OTIyMSwic3ViIjoiMSJ9.KSgK5wXSrx-OvOP9ONQDnKiVYgSDLZDS-j3-nm2fEYU`,
  },
});

export default api;
