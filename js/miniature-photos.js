import {createPhotoDescriptions} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const userPicturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

const userPictures = createPhotoDescriptions();

const userPicturesFragment = document.createDocumentFragment();

userPictures.forEach(({id, url, description, likes, comments}) => {
  const pictureElement = userPicturesTemplate.cloneNode(true);

  pictureElement.dataset.pictureId = id;
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  userPicturesFragment.append(pictureElement);
});

picturesContainer.append(userPicturesFragment);

export {userPictures, picturesContainer};


