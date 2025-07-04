export const ALERT_SHOW_TIME = 5000;

export const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
export const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

export const SubmitButtonText = {
  IDLE: 'ОПУБЛИКОВАТЬ',
  SENDING: 'ПУБЛИКУЮ',
};

export const MAX_DESCRIPTION_LENGTH = 140;

export const MAX_HASHTAGS_AMOUNT = 5;

export const SCALE_STEP = 25;
export const MIN_SCALE = 25;
export const MAX_SCALE = 100;

export const COUNT_STEP = 5;

export const RANDOM_PHOTO_AMOUNT = 10;

export const Effect = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

export const FormatSettings = {
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
};

export const EffectsSettings = {
  [Effect.NONE]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      connect: 'lower',
    },
    style: '',
    units: '',
    format: FormatSettings.format
  },
  [Effect.CHROME]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'grayscale',
    units: '',
    format: FormatSettings.format
  },
  [Effect.SEPIA]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'sepia',
    units: '',
    format: FormatSettings.format
  },
  [Effect.MARVIN]: {
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    style: 'invert',
    units: '%',
    format: FormatSettings.format
  },
  [Effect.PHOBOS]: {
    slider: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'blur',
    units: 'px',
    format: FormatSettings.format
  },
  [Effect.HEAT]: {
    slider: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'brightness',
    units: '',
    format: FormatSettings.format
  }
};

export const ACTIVE_BUTTON = 'img-filters__button--active';

export const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

export const FILE_TYPES = ['jpg', 'jpeg', 'png'];
