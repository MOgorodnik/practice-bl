import './styles/normalize.css';
import './styles/index.css';

import markupService from '../src/services/markupService';
import requests from '../src/requests/users';

const userByNameForm = document.forms.userByNameForm;

userByNameForm.addEventListener('submit', getAllUsersByName);

async function getAllUsersByName(e) {
  e.preventDefault();
  const query = e.target.elements.name.value.trim();

  if (!query) return;

  const usersByName = document.getElementById('usersByName');
  usersByName.innerHTML = '';

  try {
    // response
    const res = await requests.usersByNameAll(query);

    // on Success
    // when res is empty array
    if (!res.length) {
      markupService.renderNotFoundMessage(usersByName);
      return;
    }

    // when res is filled array
    markupService.renderUsersListByName(usersByName, res);
    usersByName.addEventListener('click', function (e) {
      console.log(e.target, e.currentTarget);
      // Перевіряємо, чи клікнули на елемент <a> або його внутрішні елементи
      if (
        e.target.matches('.card.text-decoration-none') ||
        e.target.matches('.card.text-decoration-none *')
      ) {
        e.preventDefault();

        const linkURL = new URL(e.target.closest('a').href);
        console.log(88888888888889, parseInt(linkURL.pathname.match(/\d+/)[0], 10));
      }
    });
  } catch (err) {
    // on Error
    markupService.renderError(usersByName, err);
  }
}
