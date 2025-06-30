import {isEscapeKey} from './util.js';
import {generateBigPhoto} from './full-photo.js';
import { clearComments } from './render-comments.js';

const bigPhotoModal = document.querySelector('.big-picture');
const bigPhotoModalClose = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

const openBigPhoto = (photo) => {
  bigPhotoModal.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  document.querySelector('body').classList.add('modal-open');
  generateBigPhoto(photo);
};

function closeBigPhoto () {
  clearComments();

  bigPhotoModal.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);

  document.querySelector('body').classList.remove('modal-open');
}

bigPhotoModalClose.addEventListener('click', closeBigPhoto);

export {openBigPhoto};
