import './styles/normalize.css';
import './styles/index.css';

import markupService from '../src/services/markupService';
import requests from '../src/requests/products';

// const cardProduct = require('./templates/card-product.hbs');

// const allProducts = document.getElementById('allProducts')
// console.log(allProducts);

// async function getUser() {
//   try {
//     const response = await axios.get('https://dummyjson.com/products', {
//       params: {
//         //   ID: 12345
//       },
//     });
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
// getUser()

// document.querySelector('h2').insertAdjacentHTML('beforeend', tpl())

// function htmlizeResponse(res) {
//   return `<div class="alert alert-primary mt-2" role="alert">
//     <pre> ${JSON.stringify(res, null, 2)} </pre>
//   </div>`;
// }

// async function getAllData(str = null) {
//   if (!str) return;
//   let allData = document.getElementById('allData');
//   allData.innerHTML = '';

//   try {
//     const res = await API.dummyjson.get(str, { params: { limit: 4 } });

//     const result = {
//       status: res.status + '-' + res.statusText,
//       headers: res.headers,
//       data: res.data,
//     };

//     allData.innerHTML = htmlizeResponse(result);
//   } catch (err) {
//     allData.innerHTML = htmlizeResponse(err);
//   }
// }
// getAllData('products');
// getAllData('productszzzzzz');

async function getAllProducts(str = null) {
  if (!str) return;
  const allProducts = document.getElementById('allProducts');
  allProducts.innerHTML = '';

  try {
    const res = await requests.getAllProducts(str);

    markupService.renderProductsMarkup(allProducts, res.data[str]);
  } catch (err) {
    markupService.renderErrorMarkup(allProducts, err);
  }
}
getAllProducts('products');
