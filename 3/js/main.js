const PHOTOS_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const AVATARS_COUNT = 6;

const DESCRIPTIONS = [
  'Утро в горах, туман и тишина.',
  'Дорога уходит за горизонт.',
  'Кот спит на подоконнике.',
  'Закат над морем, розовый песок.',
  'Кофе и раскрытый блокнот.',
  'Улица после дождя, отражения в лужах.',
  'Велосипед у старого забора.',
  'Поле подсолнухов до самого неба.',
  'Окно поезда, за стеклом поля.',
  'Гирлянда, плед и тёплый чай.',
  'Собака бежит по осеннему парку.',
  'Мост над рекой в утреннем свете.',
  'Книга и чашка на деревянном столе.',
  'Снежные крыши старого города.',
  'Лодка на тихой воде у причала.',
  'Цветы на подоконнике в лучах солнца.',
  'Ночной город с высоты балкона.',
  'Лесная тропа в золотых листьях.',
  'Мороженое тает на тёплом асфальте.',
  'Птицы над полем перед грозой.',
  'Старая лестница, увитая плющом.',
  'Море, камни и белая пена.',
  'Утренний рынок, ягоды и зелень.',
  'Фонари вдоль набережной вечером.',
  'Кактус на фоне окна и тени.',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулась на банановой кожуре и уронила фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Александр',
  'Мария',
  'Дмитрий',
  'Анна',
  'Сергей',
  'Ольга',
  'Иван',
  'Екатерина',
  'Павел',
  'Наталья',
  'Артём',
  'Юлия',
];

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(array) {
  return array[getRandomInteger(0, array.length - 1)];
}

let lastCommentId = 0;

function getCommentMessage() {
  const firstSentence = getRandomElement(MESSAGES);

  if (Math.random() < 0.5) {
    return firstSentence;
  }

  let secondSentence = getRandomElement(MESSAGES);

  while (secondSentence === firstSentence) {
    secondSentence = getRandomElement(MESSAGES);
  }

  return `${firstSentence} ${secondSentence}`;
}

function createComment() {
  lastCommentId += 1;

  return {
    id: lastCommentId,
    avatar: `img/avatar-${getRandomInteger(1, AVATARS_COUNT)}.svg`,
    message: getCommentMessage(),
    name: getRandomElement(NAMES),
  };
}

function createComments() {
  const commentsCount = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);

  return Array.from({ length: commentsCount }, createComment);
}

function createPhoto(index) {
  const id = index + 1;

  return {
    id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTIONS[index],
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: createComments(),
  };
}

/* eslint-disable-next-line no-unused-vars */
const similarPhotos = Array.from({ length: PHOTOS_COUNT }, (item, index) => createPhoto(index));
