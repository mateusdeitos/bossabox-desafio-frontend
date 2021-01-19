import axios from 'axios';

const api = axios.create({
  baseURL: `http://${process.env.REACT_APP_API_URL}`,
  headers: {
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTA2MjU1NTUsImV4cCI6MTYxMzIxNzU1NSwic3ViIjoiMTcifQ.cdKUHwaayz8Pi-BWWyDDm6UfzZGlnn0DwBECVY8DJE0`,
  },
});

export default api;
