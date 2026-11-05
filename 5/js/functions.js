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

function getMinutesFromTime(time) {
  const [hours, minutes] = time.split(':');
  return Number(hours) * 60 + Number(minutes);
}

function isMeetingInWorkday(workdayStart, workdayEnd, meetingStart, meetingDuration) {
  const workdayStartMinutes = getMinutesFromTime(workdayStart);
  const workdayEndMinutes = getMinutesFromTime(workdayEnd);
  const meetingStartMinutes = getMinutesFromTime(meetingStart);

  return meetingStartMinutes >= workdayStartMinutes && meetingStartMinutes + meetingDuration <= workdayEndMinutes;
}

console.log(isMeetingInWorkday('08:00', '17:30', '14:00', 90));
console.log(isMeetingInWorkday('8:0', '10:0', '8:0', 120));
console.log(isMeetingInWorkday('08:00', '14:30', '14:00', 90));
console.log(isMeetingInWorkday('14:00', '17:30', '08:0', 90));
console.log(isMeetingInWorkday('8:00', '17:30', '08:00', 900));

/* eslint-enable no-console */
