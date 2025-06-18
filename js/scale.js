import {SCALE_STEP, MIN_SCALE, MAX_SCALE} from './constants.js';

const scaleControlValue = document.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview img');
const scaleControlSmallerButton = document.querySelector('.scale__control--smaller');
const scaleControlBiggerButton = document.querySelector('.scale__control--bigger');

let defaultScale = 100;

const changeScale = () => {
  scaleControlValue.value = `${defaultScale}%`;
  imageUploadPreview.style.transform = `scale(${defaultScale / 100})`;
};

const onSmallerClick = () => {
  if (defaultScale > MIN_SCALE) {
    defaultScale -= SCALE_STEP;
    changeScale();
  }
};

const onBiggerClick = () => {
  if (defaultScale < MAX_SCALE) {
    defaultScale += SCALE_STEP;
    changeScale();
  }
};

const returnDefaultScale = () => {
  defaultScale = 100;
  scaleControlValue.value = `${defaultScale}%`;
  imageUploadPreview.style.transform = 'none';
};

scaleControlSmallerButton.addEventListener('click', onSmallerClick);
scaleControlBiggerButton.addEventListener('click', onBiggerClick);

export {onSmallerClick, onBiggerClick, returnDefaultScale};
