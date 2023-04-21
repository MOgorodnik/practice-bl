import './styles/normalize.css';
import './styles/index.css';

import requests from '../src/requests/products';
import markupService from './services/markupService';

const form = document.getElementById('deletionProductForm');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
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
    // response
    const res = await requests.deleteProduct(id);

    // render on success
    console.log('success');
    markupService.renderDeletedProduct(notification, res.data);
  } catch (err) {
    // render on error
    console.log('I catch', err);
    markupService.renderError(notification, JSON.parse(err.message));
  }
}
