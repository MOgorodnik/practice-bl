const cardNewProduct = require('../templates/card-new-product.hbs');

function renderNewProduct(el, data) {
  console.log(el, data);

  const markup = cardNewProduct(data);
  el.insertAdjacentHTML('beforeend', markup);
}

function renderError(el, data) {
  el.classList.remove('row', 'row-cols-5', 'g-3');
  el.innerHTML = htmlizeResponse(data);
}

function htmlizeResponse(res) {
  return `<div class="alert alert-primary mt-2" role="alert">
      <pre> ${JSON.stringify(res, null, 2)} </pre>
    </div>`;
}

export default {
  renderError,
  renderNewProduct,
};