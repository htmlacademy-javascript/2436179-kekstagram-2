let errorMessage = '';

const setError = (message) => {
  errorMessage = message;
};

const getError = () => errorMessage;

const clearError = () => {
  errorMessage = '';
};
const getRandomElement = (elements, count) => {
  const result = [...elements].sort(() => Math.random() - 0.5);
  return result.slice(0, count);
};

const sortByComments = (photos) => [...photos].sort((a, b) => b.comments.length - a.comments.length);

const isEscapeKey = (evt) => evt.key === 'Escape';

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {isEscapeKey, setError, getError, clearError, getRandomElement, sortByComments, debounce};
