const slider = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderElementValue = document.querySelector('.effect-level__value');
const imgPreview = document.querySelector('.img-upload__preview img');

let currentEffect = 'none';

slider.classList.add('hidden');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', ()=> {
  const value = sliderElement.noUiSlider.get();
  sliderElementValue.value = value;

  switch(currentEffect) {
    case 'chrome':
      imgPreview.style.filter = `grayscale(${value})`;
      break;
    case 'sepia':
      imgPreview.style.filter = `sepia(${value})`;
      break;
    case 'marvin':
      imgPreview.style.filter = `invert(${value}%)`;
      break;
    case 'phobos':
      imgPreview.style.filter = `blur(${value}px)`;
      break;
    case 'heat':
      imgPreview.style.filter = `brightness(${value})`;
      break;
    default:
      imgPreview.style.filter = 'none';
  }
});

const onEffectChange = (evt) => {
  currentEffect = evt.target.value;

  slider.classList.toggle('hidden', currentEffect === 'none');

  switch(currentEffect) {
    case 'none':
      imgPreview.style.filter = 'none';
      break;
    case 'chrome':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      break;
    case 'sepia':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      break;
    case 'marvin':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });
      break;
    case 'phobos':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
      break;
    case 'heat':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
      break;
  }
};

const clearEffects = () => {
  imgPreview.style.filter = 'none';
  slider.classList.add('hidden');
};

export {onEffectChange, clearEffects};
