import {openBigPhoto} from './gallery.js';

const picturesContainer = document.querySelector('.pictures');
const userPicturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

let pictures;

const renderCard = (photos) => {
  pictures = [...photos];
  const userPicturesFragment = document.createDocumentFragment();

  photos.forEach(({id, url, description, likes, comments}) => {
    const pictureElement = userPicturesTemplate.cloneNode(true);

    pictureElement.dataset.pictureId = id;
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    userPicturesFragment.append(pictureElement);
  });

  picturesContainer.append(userPicturesFragment);
};

picturesContainer.addEventListener('click', (evt) => {
  const currentPictureNode = evt.target.closest('.picture');

  if (currentPictureNode) {
    evt.preventDefault();

    const currentId = Number(currentPictureNode.dataset.pictureId);
    const currentPhoto = pictures.find((photo) => photo.id === currentId);

    openBigPhoto(currentPhoto);
  }
});


export {renderCard};


