import {isEscapeKey} from './util.js';
import {picturesContainer} from './miniature-photos.js';
import {generateBigPhoto} from './full-photo.js';

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

  bigPhotoModal.querySelector('.social__comment-count').classList.add('hidden');
  bigPhotoModal.querySelector('.comments-loader').classList.add('hidden');

  document.querySelector('body').classList.add('modal-open');
};

const closeBigPhoto = () => {
  bigPhotoModal.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);

  document.querySelector('body').classList.remove('modal-open');
};

picturesContainer.addEventListener('click', (evt) => {
  const currentPictureNode = evt.target.closest('.picture');

  if (currentPictureNode) {
    generateBigPhoto(currentPictureNode.dataset.pictureId);
    openBigPhoto();
  }
});

bigPhotoModalClose.addEventListener('click', closeBigPhoto);
