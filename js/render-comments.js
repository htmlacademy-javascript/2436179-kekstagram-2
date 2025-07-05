import {COUNT_STEP} from './constants';

const bigPhotoModal = document.querySelector('.big-picture');
const socialCommentsContainer = bigPhotoModal.querySelector('.social__comments');
const socialCommentTemplate = socialCommentsContainer.querySelector('.social__comment');
const socialCommentsCount = bigPhotoModal.querySelector('.social__comment-count');
const socialCommentsLoader = bigPhotoModal.querySelector('.social__comments-loader');

let comments = [];
let currentCount = 0;

const createComment = ({avatar, name, message}) => {
  const commentElement = socialCommentTemplate.cloneNode(true);

  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;

  return commentElement;
};

const generateCommentCount = (shownCount, totalCount) => {
  socialCommentsCount.querySelector('.social__comment-shown-count').textContent = shownCount;
  socialCommentsCount.querySelector('.social__comment-total-count').textContent = totalCount;
};

const createCommentsLoader = (shownCount, totalCount) => {
  if (shownCount >= totalCount) {
    socialCommentsLoader.classList.add('hidden');
  }
};

const onSocialCommentsLoaderClick = () => {
  const socialCommentsFragment = document.createDocumentFragment();

  const renderComments = comments.slice(currentCount, currentCount + COUNT_STEP);
  const renderCommentsLength = renderComments.length + currentCount;

  renderComments.forEach((comment) => {
    socialCommentsFragment.append(createComment(comment));
  });

  socialCommentsContainer.append(socialCommentsFragment);

  generateCommentCount(renderCommentsLength, comments.length);

  createCommentsLoader(renderCommentsLength, comments.length);

  currentCount += COUNT_STEP;
};

const clearComments = () => {
  socialCommentsContainer.innerHTML = '';

  currentCount = 0;
  socialCommentsLoader.classList.remove('hidden');
  socialCommentsLoader.removeEventListener('click', onSocialCommentsLoaderClick);
};

const generateComments = (currentPhotoComments) => {
  socialCommentsContainer.innerHTML = '';

  comments = currentPhotoComments;
  onSocialCommentsLoaderClick();

  socialCommentsLoader.addEventListener('click', onSocialCommentsLoaderClick);
};

export {clearComments, generateComments};

