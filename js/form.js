import {isEscapeKey} from './util.js';
import {returnDefaultScale} from './scale.js';
import {clearEffects} from './effects.js';
import { isValid, resetValidation } from './validation.js';
import {sendData} from './api.js';
import {showSuccessMessage, showErrorMessage} from './messages.js';
import {SubmitButtonText} from './constants.js';

const form = document.querySelector('.img-upload__form');
const hashtagsInput = form.querySelector('.text__hashtags');
const descriptionInput = form.querySelector('.text__description');
const uploadInput = form.querySelector('.img-upload__input');
const imgEditForm = form.querySelector('.img-upload__overlay');
const imgEditFormCloseButton = form.querySelector('.img-upload__cancel');
const imgEditFormSubmitButton = form.querySelector('.img-upload__submit');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    const activeElement = document.activeElement;
    if (activeElement === hashtagsInput || activeElement === descriptionInput) {
      return;
    }
    evt.preventDefault();
    closeImgEditForm();
  }
};

const showForm = (isShown = true) => {
  if (isShown) {
    imgEditForm.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
  } else {
    imgEditForm.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
};

const openImgEditForm = () => {
  showForm();
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeImgEditForm = () => {
  form.reset();
  resetValidation();
  returnDefaultScale();
  clearEffects();
  showForm(false);
  document.removeEventListener('keydown', onDocumentKeydown);

};

imgEditFormCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeImgEditForm();
});

uploadInput.addEventListener('change', openImgEditForm);

const blockSubmitButton = () => {
  imgEditFormSubmitButton.disabled = true;
  imgEditFormSubmitButton.textContent = SubmitButtonText.SENDING;
};

const unBlockSubmitButton = () => {
  imgEditFormSubmitButton.disabled = false;
  imgEditFormSubmitButton.textContent = SubmitButtonText.IDLE;
};

const setFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (isValid()) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(() => {
          onSuccess();
          showSuccessMessage();
        })
        .catch(() => {
          showErrorMessage();
        })
        .finally(unBlockSubmitButton);
    }
  });
};

export {setFormSubmit, closeImgEditForm};
