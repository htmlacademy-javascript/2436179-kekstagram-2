import {generateComments} from './render-comments.js';

const bigPhotoModal = document.querySelector('.big-picture');

const generateBigPhoto = ({url, likes, description, comments}) => {

  bigPhotoModal.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPhotoModal.querySelector('.likes-count').textContent = likes;
  bigPhotoModal.querySelector('.social__caption').textContent = description;
  bigPhotoModal.querySelector('.social__comment-shown-count').textContent = comments.length;
  bigPhotoModal.querySelector('.social__comment-total-count').textContent = comments.length;


  generateComments(comments);
};

export {generateBigPhoto};

