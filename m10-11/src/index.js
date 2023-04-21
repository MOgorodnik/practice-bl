import './styles/normalize.css';
import './styles/index.css';

import requests from '../src/requests/products';
import markupService from './services/markupService';

// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     /* other product data */
//   })
// })

const form = document.getElementById('newProductSectionForm');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const { title, description, price } = e.currentTarget.elements;

  if (!title.value || !description.value || !price.value) {
    console.log('Fill all form"s fields');
    return;
  }

  addAndDrawNewProduct(e.currentTarget);
}

async function addAndDrawNewProduct(form) {
  const newProductSection = document.getElementById('newProductSection');
  newProductSection.innerHTML = ''
  // const formData = {
  //   title: title.value,
  //   description: description.value,
  //   price: price.value,
  // };
  const formData = new FormData(form);
  formData.append('thumbnail', 'https://picsum.photos/600/300?random=1')
  const queryString = new URLSearchParams(formData);
  const productParams = Object.fromEntries(queryString);

  console.log(formData);
  console.log(queryString);
  console.log(productParams);

  // const opt = {
  //   headers: { 'Content-Type': 'application/json' },
  //   body: Object.fromEntries(queryString),
  //   // body: JSON.stringify({
  //   //   title: 'BMW Pencil',
  //   //   /* other product data */
  //   // })
  // };

  try {
    // response
    const res = await requests.addNewProduct(productParams);

    // render on success
    markupService.renderNewProduct(newProductSection, res.data)
  } catch (err) {
    // render on error
    markupService.renderError(newProductSection, err)
  }
}
