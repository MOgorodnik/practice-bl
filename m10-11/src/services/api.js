import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dummyjson.com',
//   headers: {
//     'Content-Type': 'application/json',
//   },
});

export default {
  dummyjson: instance
};
