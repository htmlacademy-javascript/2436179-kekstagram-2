import {userPictures} from './miniature-photos.js';
import {generateComments} from './render-comments.js';

const bigPhotoModal = document.querySelector('.big-picture');

const generateBigPhoto = (pictureId) => {
  const currentPhoto = userPictures.find((photo) => photo.id === Number(pictureId));

  bigPhotoModal.querySelector('.big-picture__img').querySelector('img').src = currentPhoto.url;
  bigPhotoModal.querySelector('.likes-count').textContent = currentPhoto.likes;
  bigPhotoModal.querySelector('.social__caption').textContent = currentPhoto.description;
  bigPhotoModal.querySelector('.social__comment-shown-count').textContent = currentPhoto.comments.length;
  bigPhotoModal.querySelector('.social__comment-total-count').textContent = currentPhoto.comments.length;


  generateComments(currentPhoto.comments);
};

export {generateBigPhoto};

