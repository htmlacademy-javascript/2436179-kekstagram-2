import {isEscapeKey} from './util.js';
import {ALERT_SHOW_TIME} from './constants.js';

const messageContainer = document.querySelector('body');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const dataErrorMessageTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

let messageElement;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseButtonClick();
  }
};

const onDocumentClick = () => {
  messageElement.addEventListener('click', (evt) => {
    if (evt.target === messageElement) {
      onCloseButtonClick();
    }
  });
};

function onCloseButtonClick () {
  if (messageElement) {
    messageElement.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  }
}

const createMessage = (template, closeSelector = null) => {
  messageElement = template.cloneNode(true);

  if (closeSelector) {
    const closeButton = messageElement.querySelector(closeSelector);
    closeButton.addEventListener('click', onCloseButtonClick);
  }

  messageContainer.append(messageElement);

  document.addEventListener('keydown', onDocumentKeydown);
  onDocumentClick();
};

const showSuccessMessage = () => {
  createMessage(successMessageTemplate, '.success__button');

};

const showErrorMessage = () => {
  createMessage(errorMessageTemplate, '.error__button');
};

const showDataErrorMessage = () => {
  createMessage(dataErrorMessageTemplate);

  setTimeout(() => {
    onCloseButtonClick();
  }, ALERT_SHOW_TIME);
};

export {showSuccessMessage, showErrorMessage, showDataErrorMessage};
