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

const createComments = () => ({
  id: generateRandomValue(1, 100000),
  avatar: `img/avatar-${ generateRandomValue(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createPhotoDescription = () => ({
  id: generateRandomValue(1, 25),
  url: `photos/${ generateRandomValue(1, 25)}.jpg`,
  description: 'Боль сама по себе является любовью, главной причиной, но она дает возможность развиваться в труде и боли. Чтобы достичь минимальной цели, кто-то должен приложить усилия, если он не хочет получить что-то в результате. Никто не должен упражняться, если он не получает от этого выгоды.',
  likes: generateRandomValue(15, 200),
  comments: Array.from({length: generateRandomValue(0, 30)}, createComments)
});

const generatePhotoDescriptions = Array.from({length: 25}, createPhotoDescription);

console.log(generatePhotoDescriptions);
