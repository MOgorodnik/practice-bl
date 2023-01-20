import API from '../services/api';

function getSingleProduct(id) {
  return API.dummyjson.get(`/products/${id}`);
  // return API.dummyjson.get(`/products?ID=${id}`, { params: { ID: id } });
}

export default {
  singleProduct: getSingleProduct,
};
