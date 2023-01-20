import './styles/normalize.css';
import './styles/index.css';

import markupService from '../src/services/markupService';
import requests from '../src/requests/products';

const singleProductForm = document.getElementById('singleProductForm');

singleProductForm.addEventListener('submit', onSingleProductFormSubmit);

function onSingleProductFormSubmit(e) {
  e.preventDefault();

  const id = e.currentTarget.elements.id.valueAsNumber;

  drawProductByID(id);
}

async function drawProductByID(id = 1) {
  const singleProduct = document.getElementById('singleProduct');
  singleProduct.innerHTML = ''

  try {
    // response
    const res = await requests.singleProduct(id);

    // markup render success
    markupService.renderSingleProduct(singleProduct, res.data);
  } catch (err) {
    // markup render error
    markupService.renderError(singleProduct, err);
  }
}
