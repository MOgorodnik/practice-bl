const cardProduct = require('../templates/users-list.hbs');
const notFoundMessage = require('../templates/not-found-message.hbs');

function renderUsersListByName(el, data) {
  const markup = cardProduct(data);
  el.insertAdjacentHTML('beforeend', markup);
}

function renderNotFoundMessage(el) {
  const markup = notFoundMessage("Не знайдено жодного користувача з таким ім'ям. Спробуйте інше.");
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
  renderUsersListByName,
  renderError,
  renderNotFoundMessage,
};
