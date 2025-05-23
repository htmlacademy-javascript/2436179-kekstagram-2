const scaleControlValue = document.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview img');

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

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

export {onSmallerClick, onBiggerClick, returnDefaultScale};
