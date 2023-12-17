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

/**
 * Returns a string representation of a number in exponential notation.
 *
 * @param {number} number
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '1.23e+4'
 */
function toExponential(/* number, fractionDigits */) {
  throw new Error('Not implemented');
}

/**
 * Returns a string representation of a number in fixed-point notation.
 *
 * @param {number} number
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '12345.00'
 * 12.345, 1   => '12.3'
 */
function toFixed(/* number, fractionDigits */) {
  throw new Error('Not implemented');
}

/**
 * Returns a string representation of a number in normal (fixed-point or exponential)
 * notation rounded to precision significant digits.
 *
 * @param {number} number
 * @param {number} precision
 * @return {string}
 *
 * @example:
 * 12345, 7    => '12345.00'
 * 12.345, 4   => '12.35'
 */
function toPrecision(/* number, precision */) {
  throw new Error('Not implemented');
}

/**
 * Returns the primitive value of a Number object.
 *
 * @param {Number} number
 * @return {number}
 *
 * @example:
 * new Number(5) => 5
 * Number(-5)    => -5
 */
function getNumberValue(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns a boolean value indicating whether the parameter is a number or not.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * Infinity => false
 * NaN      => false
 * 0        => true
 * 'a' / 1  => false
 * 'a'      => false
 * 5        => true
 * '5'      => false
 */
function isNumber(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns a boolean value indicating whether a number is an integer or not.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 5    => true
 * 5.1  => false
 * '5'  => false
 */
function isInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns a floating point number or, if the number cannot be parsed from the argument, returns NaN.
 *
 * @param {string} str
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh' => 4.567
 * 'abcdefgh'      => NaN
 */
function getFloatOnString(/* str */) {
  throw new Error('Not implemented');
}

/**
 * Returns an integer of the specified base or, if the number cannot be parsed
 * from the argument, returns NaN.
 *
 * @param {string} str
 * @param {number} base
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh', 10  => 4
 * 'abcdefgh', 10       => NaN
 * '1.234', 2           => 1
 * '10', 8              => 8
 */
function getIntegerOnString(/* str, base */) {
  throw new Error('Not implemented');
}

/**
 * Returns whether a number is a safe integer.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 10       => true
 * 3.5      => false
 * 2 ** 53  => false
 */
function isSafeInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the smallest integer less than or equal to a given number.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.9  => 5
 * -5.1 => -6
 */
function roundToSmallestInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the largest integer greater than or equal to a given number.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.1  => 6
 * -5.9 => -5
 */
function roundToLargestInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the value of a number rounded to the nearest integer.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.5  => 6
 * 5.4  => 5
 * -5.5 => -5
 */
function roundToNearestInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the integer part of a number by removing any fractional digits.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.5  => 5
 * 5.4  => 5
 * -5.5 => -5
 */
function getIntegerPartNumber(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the sum of numbers.
 *
 * @param {number} x1
 * @param {number} x2
 * @param {number} x3
 * @returns {number}
 *
 * @example:
 * 1, 2, 3       => 6
 * 0.1, 0.2, 0.3 => 0.6
 */
function getSumOfNumbers(/* x1, x2, x3 */) {
  throw new Error('Not implemented');
}

/**
 * Returns the largest number.
 *
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 *
 * @example:
 * 1, 2   => 2
 * -5, -6 => -5
 * 0, 5   => 5
 */
function getMaxNumber(/* firstNumber, secondNumber */) {
  throw new Error('Not implemented');
}

/**
 * Returns a random integer in the range from min to max.
 *
 * @param {number} min
 * @param {number} max
 * @return {number}
 *
 * @example:
 * 1, 2  => 1 | 2
 * -5, 0 => -5 | -4 | -3 | -2 | -1 | 0
 * -1, 1 => -1 | 0 | 1
 */
function getRandomInteger(/* min, max */) {
  throw new Error('Not implemented');
}

/**
 * Returns the length of the hypotenuse of a right triangle.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 * 3, 4 => 5
 */
function getHypotenuse(/* a, b */) {
  throw new Error('Not implemented');
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
function getCountOfOddNumbers(/* number */) {
  throw new Error('Not implemented');
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
