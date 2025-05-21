const scaleControlValue = document.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview img');

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

let currentScale = parseInt(scaleControlValue.value, 10);

const onSmallerClick = () => {
  if (currentScale > MIN_SCALE) {
    currentScale -= SCALE_STEP;
    scaleControlValue.value = `${currentScale}%`;
    imageUploadPreview.style.transform = `scale(${currentScale / 100})`;
  }
};

const onBiggerlick = () => {
  if (currentScale < MAX_SCALE) {
    currentScale += SCALE_STEP;
    scaleControlValue.value = `${currentScale}%`;
    imageUploadPreview.style.transform = `scale(${currentScale / 100})`;
  }
};

export {onSmallerClick, onBiggerlick};
