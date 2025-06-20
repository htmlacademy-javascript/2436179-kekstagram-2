import {MAX_HASHTAGS_AMOUNT} from './constants.js';
import {setError, getError, clearError} from './util.js';

const hashtagsRegexValidation = (item, regex, message) => {
  if (!regex.test(item)) {
    setError(message);
    return false;
  }
  return true;
};

const minHashtagLength = (item) => {
  if (item.length <= 1) {
    setError('хештег не может состоять только из одной решётки');
    return false;
  }
  return true;
};
const checkDublicate = (hashtags) => hashtags.some((hashtag, index) => hashtags.indexOf(hashtag) !== index);

const isHashtagValid = (value) => {
  clearError();

  const inputText = value.toLowerCase().trim();
  const hashtagsArray = inputText.split(/\s+/);

  if (inputText === '') {
    return true;
  }

  if (/#\S*#/.test(inputText)) {
    setError('хэштеги должны разделяться пробелами');
    return false;
  }

  if (hashtagsArray.length > MAX_HASHTAGS_AMOUNT) {
    setError(`нельзя указать больше ${MAX_HASHTAGS_AMOUNT} хэштегов`);
    return false;
  }

  if (checkDublicate(hashtagsArray)) {
    setError('один и тот же хэштег не может быть использован дважды');
    return false;
  }

  return hashtagsArray.every((item) =>
    hashtagsRegexValidation(item, /^#/, 'хэштег должен начинаться с символа # (решётка)') &&
    minHashtagLength(item) &&
    hashtagsRegexValidation(item, /^#[a-zа-я0-9]+$/i, 'хэштег содержит недопустимые символы') &&
    hashtagsRegexValidation(item, /^#[a-zа-я0-9]{1,19}$/i, 'максимальная длина одного хэштега 20 символов, включая решётку')
  );
};

export {isHashtagValid, getError};

