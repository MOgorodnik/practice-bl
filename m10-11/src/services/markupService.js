const cardSingleProduct = require('../templates/card-single-product.hbs');

function renderSingleProduct(el, data) {
  const markup = cardSingleProduct(data);
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
  renderSingleProduct,
};
