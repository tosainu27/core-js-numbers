/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */

function getRectangleArea(width, height) {
  return Number(width * height);
}

function getCircleCircumference(radius) {
  return Math.PI * 2 * radius;
}

function getAverage(value1, value2) {
  return value1 / 2 + value2 / 2;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function getLinearEquationRoot(a, b) {
  return Number(-b) / Number(a);
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
  return Math.acos(
    (x1 * x2 + y1 * y2) /
      (Math.sqrt(x1 ** 2 + y1 ** 2) * Math.sqrt(x2 ** 2 + y2 ** 2))
  );
}

function getLastDigit(value) {
  return Number(value % 10);
}

function parseNumberFromString(value) {
  return +value;
}

function getParallelepipedDiagonal(a, b, c) {
  return Number(Math.sqrt(a ** 2 + b ** 2 + c ** 2));
}

function roundToPowerOfTen(num, pow) {
  return Math.round(num / 10 ** pow) * 10 ** pow;
}

function isPrime(n) {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

function toNumber(value, def) {
  if (value === null) {
    return def;
  }
  if (Number.isNaN(value)) {
    return def;
  }
  const result = typeof value;
  if (result !== 'number' && +value !== Number(value)) {
    return def;
  }
  return Number(value);
}

function getCube(num) {
  return num ** 3;
}

function getFibonacciNumber(index) {
  if (index === 0) {
    return 0;
  }
  if (index === 1) {
    return 1;
  }
  return getFibonacciNumber(index - 1) + getFibonacciNumber(index - 2);
}

function getSumToN(n) {
  let sum = 0;
  for (let i = 0; i <= n; i += 1) {
    sum += i;
  }
  return sum;
}

function getSumOfDigits(num) {
  const str = String(num);
  return str
    .split('')
    .reduce((sum, current) => Number(sum) + Number(current), 0);
}

function isPowerOfTwo(num) {
  if (num === 0) {
    return false;
  }
  let i = num;
  while (i % 2 === 0) {
    i /= 2;
  }
  return i === 1;
}

function getSine(num) {
  return Math.sin(num);
}

function numberToStringInBase(number, base) {
  return number.toString(base);
}

function toExponential(number, fractionDigits) {
  return number.toExponential(fractionDigits);
}

function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}

function toPrecision(number, precision) {
  return number.toPrecision(precision);
}

function getNumberValue(number) {
  return number.valueOf();
}

function isNumber(number) {
  return Number.isFinite(number);
}

function isInteger(number) {
  return Number.isInteger(number);
}

function getFloatOnString(str) {
  return Number.parseFloat(str);
}

function getIntegerOnString(str, base) {
  return Number.parseInt(str, base);
}

function isSafeInteger(number) {
  return Number.isSafeInteger(number);
}

function roundToSmallestInteger(number) {
  return Math.floor(number);
}

function roundToLargestInteger(number) {
  return Math.ceil(number);
}

function roundToNearestInteger(number) {
  return Math.round(number);
}

function getIntegerPartNumber(number) {
  return Math.trunc(number);
}

function getSumOfNumbers(x1, x2, x3) {
  return (x1 * 100 + x2 * 100 + x3 * 100) / 100;
}

function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getHypotenuse(a, b) {
  return Math.hypot(a, b);
}

/**
 * Returns count of odd numbers from zero to the resulting number.
 * The resulting number is taken into account.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 4  => 2
 * 5  => 3
 * 10 => 5
 * 15 => 8
 */
function getCountOfOddNumbers(number) {
  let result = 0;
  for (let i = 0; i <= Math.abs(number); i += 1) {
    if (i % 2 !== 0) {
      result += 1;
    }
  }
  return result;
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
