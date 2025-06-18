import {PhotoId, PhotoLikes, PhotoComments, AvatarId, NAMES, MESSAGES, DESCRIPTIONS, TOTAL_PHOTO_DESCRIPTION} from './constants.js';
import {createRandomId, getRandomArrayElement, generateRandomValue} from './util.js';

let commentId = 1;

const generateRandomPhotoId = createRandomId(PhotoId.MIN, PhotoId.MAX);
const generateRandomPhotoUrl = createRandomId(PhotoId.MIN, PhotoId.MAX);

const createComments = () => ({
  id: commentId++,
  avatar: `img/avatar-${ generateRandomValue(AvatarId.MIN, AvatarId.MAX)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createPhotoDescription = () => ({
  id: generateRandomPhotoId(),
  url: `photos/${ generateRandomPhotoUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: generateRandomValue(PhotoLikes.MIN, PhotoLikes.MAX),
  comments: Array.from({length: generateRandomValue(PhotoComments.MIN, PhotoComments.MAX)}, createComments)
});

const createPhotoDescriptions = () => Array.from({length: TOTAL_PHOTO_DESCRIPTION}, createPhotoDescription);

export {createPhotoDescriptions};
