const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')
// const assertEqual = function (actual, expected) {
//   if (eqArrays(actual, expected)) {
//     console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
//   } else {
//     console.log(`🚨 Assertion Failed: "${actual}" !== "${expected}"`);
//   }
// };
const middle = (arr) => {
  if (arr.length <= 2) {
    return []
  } else if (arr.length % 2 === 0) {
    return arr.slice(arr.length / 2 - 1, arr.length / 2 + 1)
  } else {
    return [arr[(arr.length / 2 - 0.5)]]
  }
}
module.exports = middle;