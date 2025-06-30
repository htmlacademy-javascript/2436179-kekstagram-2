import './form.js';
import { getData } from './api.js';
import { renderCard } from './miniature-photos.js';
import {showDataErrorMessage} from './messages.js';
import {setFormSubmit, closeImgEditForm} from './form.js';
import {showFilters} from './filters.js';

getData()
  .then((photos) => {
    renderCard(photos);
    showFilters(photos);
  })
  .catch(() => {
    showDataErrorMessage();
  });

setFormSubmit(closeImgEditForm);


