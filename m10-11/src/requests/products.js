import API from '../services/api';

// fetch('https://dummyjson.com/products/1', {
//   method: 'DELETE',
// })

async function deleteProduct(id) {
  return await API.dummyjson.delete(`/products/${id}`);
  // try {
  // } catch (error) {
  //   throw new Error(error.message)
  // }
}

export default {
  deleteProduct,
};