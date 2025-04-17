import {userPictures} from './miniature-photos.js';

const bigPhotoModal = document.querySelector('.big-picture');
const socialCommentsContainer = document.querySelector('.social__comments');
const socialCommentTemplate = socialCommentsContainer.querySelector('.social__comment');

const generateBigPhoto = (pictureId) => {
  const currentPhoto = userPictures.find((photo) => photo.id === Number(pictureId));

  bigPhotoModal.querySelector('.big-picture__img').querySelector('img').src = currentPhoto.url;
  bigPhotoModal.querySelector('.likes-count').textContent = currentPhoto.likes;
  bigPhotoModal.querySelector('.social__caption').textContent = currentPhoto.description;
  bigPhotoModal.querySelector('.social__comment-shown-count').textContent = currentPhoto.comments.length;
  bigPhotoModal.querySelector('.social__comment-total-count').textContent = currentPhoto.comments.length;

  const generateComments = () => {
    const socialCommentsFragment = document.createDocumentFragment();
    socialCommentsContainer.innerHTML = '';

    currentPhoto.comments.forEach((comment) => {
      const commentElement = socialCommentTemplate.cloneNode(true);

      commentElement.querySelector('.social__picture').src = comment.avatar;
      commentElement.querySelector('.social__picture').alt = comment.name;
      commentElement.querySelector('.social__text').textContent = comment.message;
      socialCommentsFragment.append(commentElement);
    });

    socialCommentsContainer.append(socialCommentsFragment);
  };

  generateComments();
};

export {generateBigPhoto};

