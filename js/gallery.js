import {isEscapeKey} from './util.js';
import {picturesContainer} from './miniature-photos.js';
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

const openBigPhoto = () => {
  bigPhotoModal.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  document.querySelector('body').classList.add('modal-open');
};

const closeBigPhoto = () => {
  clearComments();

  bigPhotoModal.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);

  document.querySelector('body').classList.remove('modal-open');
};

picturesContainer.addEventListener('click', (evt) => {
  const currentPictureNode = evt.target.closest('.picture');

  if (currentPictureNode) {
    evt.preventDefault();
    generateBigPhoto(currentPictureNode.dataset.pictureId);
    openBigPhoto();
  }
});

bigPhotoModalClose.addEventListener('click', closeBigPhoto);
