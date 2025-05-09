let errorMessage = '';

const setError = (message) => {
  errorMessage = message;
};

const getError = () => errorMessage;

const clearError = () => {
  errorMessage = '';
};

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomId = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
const generateRandomValue = (min, max) => createRandomId(min, max) ();

const isEscapeKey = (evt) => evt.key === 'Escape';

export {createRandomId, getRandomArrayElement, generateRandomValue, isEscapeKey, setError, getError, clearError};
