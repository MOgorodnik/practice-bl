import API from '../services/api';

// fetch('https://dummyjson.com/products/1', {
//   method: 'DELETE',
// })

async function deleteProduct(id) {
  console.log('deleteProduct(id)', id);
  try {
    return await API.dummyjson.delete(`/products/${id}`);
  } catch (error) {
    throw new Error(
      JSON.stringify({ name: error.name, message: error.response.data.message })
    );
  }
}

export default {
  deleteProduct,
};
