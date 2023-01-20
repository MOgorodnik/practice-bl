import API from '../services/api';

function getAllProducts(str) {
  return API.dummyjson.get(str, { params: { limit: 5 } });
}

export default {
  getAllProducts,
};
