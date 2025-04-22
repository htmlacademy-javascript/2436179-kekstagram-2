let comments = [];
let currentCount = 0;
const COUNT_STEP = 5;

const bigPhotoModal = document.querySelector('.big-picture');
const socialCommentsContainer = bigPhotoModal.querySelector('.social__comments');
const socialCommentTemplate = socialCommentsContainer.querySelector('.social__comment');
const socialCommentsCount = bigPhotoModal.querySelector('.social__comment-count');
const socialCommentsLoader = bigPhotoModal.querySelector('.social__comments-loader');

const generateNextComments = () => {
  const socialCommentsFragment = document.createDocumentFragment();

  const renderComments = comments.slice(currentCount, currentCount + COUNT_STEP);
  const renderCommentsLength = renderComments.length + currentCount;

  renderComments.forEach((comment) => {
    const commentElement = socialCommentTemplate.cloneNode(true);

    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    socialCommentsFragment.append(commentElement);
  });

  socialCommentsContainer.append(socialCommentsFragment);

  socialCommentsCount.querySelector('.social__comment-shown-count').textContent = renderCommentsLength;
  socialCommentsCount.querySelector('.social__comment-total-count').textContent = comments.length;

  if (renderCommentsLength >= comments.length) {
    socialCommentsLoader.classList.add('hidden');
  }

  currentCount += COUNT_STEP;
};

const clearComments = () => {
  socialCommentsContainer.innerHTML = '';

  currentCount = 0;
  socialCommentsLoader.classList.remove('hidden');
  socialCommentsLoader.removeEventListener('click', generateNextComments);
};

const generateComments = (currentPhotoComments) => {
  socialCommentsContainer.innerHTML = '';

  comments = currentPhotoComments;
  generateNextComments();

  socialCommentsLoader.addEventListener('click', generateNextComments);
};

export {clearComments, generateComments};

