import API from '../services/api';

function addNewProduct(product) {
  return API.dummyjson.post('/products/add', product);
}

export default {
  addNewProduct,
};