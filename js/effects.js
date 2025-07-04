import {Effect, EffectsSettings} from './constants';

const slider = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderElementValue = document.querySelector('.effect-level__value');
const imgPreview = document.querySelector('.img-upload__preview img');
const effects = document.querySelector('.img-upload__effects');

let currentEffect = Effect.NONE;

slider.classList.add('hidden');

noUiSlider.create(sliderElement, {
  ...EffectsSettings[Effect.NONE].slider,
  format: EffectsSettings[Effect.NONE].format
});

sliderElement.noUiSlider.on('update', ()=> {
  const value = sliderElement.noUiSlider.get();
  sliderElementValue.value = value;

  if (currentEffect === Effect.NONE) {
    imgPreview.style.filter = '';
  } else {
    const { style, units } = EffectsSettings[currentEffect];
    imgPreview.style.filter = `${style}(${value}${units})`;
  }
});

const onEffectChange = (evt) => {
  currentEffect = evt.target.value;

  slider.classList.toggle('hidden', currentEffect === Effect.NONE);

  sliderElement.noUiSlider.updateOptions({
    ...EffectsSettings[currentEffect].slider,
    format: EffectsSettings[Effect.NONE].format
  });
};

const clearEffects = () => {
  imgPreview.style.filter = Effect.NONE;
  slider.classList.add('hidden');
};

effects.addEventListener('change', onEffectChange);

export {clearEffects};
