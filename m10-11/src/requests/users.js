import API from '../services/api';

function getAllUsers(str) {
  return API.dummyjson.get(str, { params: { limit: 10 } });
}

export default {
  allUsers: getAllUsers,
};