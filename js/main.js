import './form.js';
import { getData } from './api.js';
import { renderCard } from './miniature-photos.js';
import {showDataErrorMessage} from './messages.js';
import {setFormSubmit, closeImgEditForm} from './form.js';

getData()
  .then(((photos) => {
    renderCard(photos);
  }))
  .catch(() => {
    showDataErrorMessage();
  });

setFormSubmit(closeImgEditForm);


