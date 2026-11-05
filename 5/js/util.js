function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(array) {
  return array[getRandomInteger(0, array.length - 1)];
}

export { getRandomInteger, getRandomElement };
