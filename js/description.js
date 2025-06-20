import {MAX_DESCRIPTION_LENGTH} from './constants.js';
import {setError, getError, clearError} from './util.js';

const isDescriptionValid = (value) => {
  clearError();

  if (value.length >= MAX_DESCRIPTION_LENGTH) {
    setError(`длина комментария не может составлять больше ${MAX_DESCRIPTION_LENGTH} символов`);
    return false;
  }

  return true;
};

export {isDescriptionValid, getError};


