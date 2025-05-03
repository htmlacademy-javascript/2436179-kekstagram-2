import {setError, getError, clearError} from './util.js';

const MAX_DESCRIPTION_LENGTH = 140;

const isDescriptionValid = (value) => {
  clearError();

  if (value.length >= MAX_DESCRIPTION_LENGTH) {
    setError(`длина комментария не может составлять больше ${MAX_DESCRIPTION_LENGTH} символов`);
    return false;
  }

  return true;
};

export {isDescriptionValid, getError};


