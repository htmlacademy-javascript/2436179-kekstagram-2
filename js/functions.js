function getStringLenght(string, maxLength) {
  return string.length <= maxLength;
}

getStringLenght('проверяемая строка', 20);
getStringLenght('проверяемая строка', 18);
getStringLenght('проверяемая строка', 10);

function getCheckString(string) {

  const newString = string.replaceAll(' ', '').toLowerCase();
  let result = '';

  for (let i = newString.length - 1; i >= 0 ; i--) {
    result += newString[i];
  }

  return result === newString;
}

getCheckString('топот');
getCheckString('ДовОд');
getCheckString('Кекс');
getCheckString('Лёша на полке клопа нашёл ');

function getNumber(string) {

  const getString = string.toString();
  let result = '';

  for (let i = 0; i < getString.length; i++) {
    if (getString[i] >= '0' && getString[i] <= '9') {
      result += getString[i];
    }
  }

  return result ? parseInt(result, 10) : NaN;
}

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('а я томат');
getNumber(2023);
getNumber(-1);
getNumber(1.5);
