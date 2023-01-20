import './styles/normalize.css';
import './styles/index.css';

import requests from '../src/requests/products';
import markupService from './services/markupService';

const form = document.getElementById('deletionProductForm');

form.addEventListener('submit', onFormsubmit);

function onFormsubmit(e) {
  e.preventDefault();
  const { deletionId } = e.currentTarget.elements;

  if (!deletionId.value) {
    console.log('Required field!');
    return;
  }

  deleteProduct(deletionId.value);
}

async function deleteProduct(id) {
  try {
    const res = await requests.deleteProduct(id);

    console.log('success');
  } catch (err) {
    console.log('I catch', err);
    markupService.renderError(notification, JSON.parse(`{"name": "${err.name}","message": "${err.message}"}`));
  }
}
