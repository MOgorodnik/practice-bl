const cardDeletedProduct = require('../templates/card-deleted-product.hbs');

function renderDeletedProduct(el, data) {
  console.log('renderDeletedProduct', el);

  const markup = cardDeletedProduct(data);
  el.innerHTML = markup;
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
  renderDeletedProduct,
};
