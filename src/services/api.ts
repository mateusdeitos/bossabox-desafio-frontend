import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTMxMjYzMjUsImV4cCI6MTYxNTcxODMyNSwic3ViIjoiMSJ9.tHfvDAUq-kjyt3jsrwYl314DDBJD2hrj342uCb9WkYg`,
  },
});

export default api;
