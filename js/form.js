import {isEscapeKey, getError} from './util.js';
import {isHashtagValid} from './hashtag-valid.js';
import {isDescriptionValid} from './description-valid.js';

const form = document.querySelector('.img-upload__form');
const uploadInput = form.querySelector('.img-upload__input');
const imgEditForm = form.querySelector('.img-upload__overlay');
const imgEditFormCloseButton = form.querySelector('.img-upload__cancel');
const hashtagsInput = form.querySelector('.text__hashtags');
const descriptionInput = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper'
});

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

const openImgEditForm = () => {
  imgEditForm.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  document.querySelector('body').classList.add('modal-open');
};

const closeImgEditForm = () => {
  uploadInput.value = '';

  imgEditForm.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.querySelector('body').classList.remove('modal-open');
};

pristine.addValidator(hashtagsInput, isHashtagValid, getError);
pristine.addValidator(descriptionInput, isDescriptionValid, getError);

imgEditFormCloseButton.addEventListener('click', closeImgEditForm);
uploadInput.addEventListener('change', openImgEditForm);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    form.submit();
  }
});

