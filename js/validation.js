import {getError} from './util.js';
import {isHashtagValid} from './hashtag.js';
import {isDescriptionValid} from './description.js';

const form = document.querySelector('.img-upload__form');
const hashtagsInput = form.querySelector('.text__hashtags');
const descriptionInput = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper'
});

pristine.addValidator(hashtagsInput, isHashtagValid, getError);
pristine.addValidator(descriptionInput, isDescriptionValid, getError);

export const isValid = () => pristine.validate();
export const resetValidation = () => {
  pristine.reset();
};
