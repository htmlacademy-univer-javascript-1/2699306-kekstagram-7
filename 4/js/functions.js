/* eslint-disable no-console */

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

function isPalindrome(string) {
  const normalized = string.toLowerCase().replace(/\s/g, '');
  return normalized === normalized.split('').reverse().join('');
}

function extractNumber(value) {
  const digits = String(value).replace(/\D/g, '');
  return digits ? Number(digits) : NaN;
}

console.log(checkStringLength('проверяемая строка', 20));
console.log(checkStringLength('проверяемая строка', 18));
console.log(checkStringLength('проверяемая строка', 10));

console.log(isPalindrome('топот'));
console.log(isPalindrome('Довод'));
console.log(isPalindrome('кекс'));
console.log(isPalindrome('Лёша на полке клопа нашёл'));

console.log(extractNumber('2023 год'));
console.log(extractNumber('ECMAScript 2022'));
console.log(extractNumber('1 кефир, 0.5 батона'));
console.log(extractNumber('агент 007'));
console.log(extractNumber('а я томат'));
console.log(extractNumber(2023));
console.log(extractNumber(-1));
console.log(extractNumber(1.5));

/* eslint-enable no-console */
