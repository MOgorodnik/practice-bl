import './styles/normalize.css';
import './styles/index.css';

import markupService from '../src/services/markupService';
import requests from '../src/requests/users';

async function getAllUsers(str = null) {
  if (!str) return;
  const allUsers = document.getElementById('allUsers');
  allUsers.innerHTML = '';

  try {
    const res = await requests.allUsers(str);

    markupService.renderUsers(allUsers, res.data[str]);
  } catch (err) {
    markupService.renderError(allUsers, err);
  }
}
getAllUsers('users');