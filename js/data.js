import {createRandomId, getRandomArrayElement, generateRandomValue} from './util.js';

const TOTAL_PHOTO_DESCRIPTION = 25;
const photoId = {
  MIN: 1,
  MAX: 25
};
const photoLikes = {
  MIN: 15,
  MAX: 200
};
const photoComments = {
  MIN: 0,
  MAX: 30
};
const avatarId = {
  MIN: 1,
  MAX: 6
};
let commentId = 1;

const NAMES = [
  'Максим',
  'Том',
  'Алекс',
  'Катя',
  'Арина',
  'Артем'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const generateRandomPhotoId = createRandomId(photoId.MIN, photoId.MAX);
const generateRandomPhotoUrl = createRandomId(photoId.MIN, photoId.MAX);

const createComments = () => ({
  id: commentId++,
  avatar: `img/avatar-${ generateRandomValue(avatarId.MIN, avatarId.MAX)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createPhotoDescription = () => ({
  id: generateRandomPhotoId(),
  url: `photos/${ generateRandomPhotoUrl()}.jpg`,
  description: 'Боль сама по себе является любовью, главной причиной, но она дает возможность развиваться в труде и боли. Чтобы достичь минимальной цели, кто-то должен приложить усилия, если он не хочет получить что-то в результате. Никто не должен упражняться, если он не получает от этого выгоды.',
  likes: generateRandomValue(photoLikes.MIN, photoLikes.MAX),
  comments: Array.from({length: generateRandomValue(photoComments.MIN, photoComments.MAX)}, createComments)
});

const createPhotoDescriptions = () => Array.from({length: TOTAL_PHOTO_DESCRIPTION}, createPhotoDescription);

export {createPhotoDescriptions};
