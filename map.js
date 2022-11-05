//Nov 04, 2022 Module 1 Week 2

const eqArrays = function (array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true
  } else {
    return false
  }
}

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🚨 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let word of array) {
    results.push(callback(word));
  }
  return results;
}

const results0 = map(words, word => word.length)
assertArraysEqual(results0, [6, 7, 2, 5, 3])

const results1 = map(words, word => word[0])
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])

const results2 = map(words, word => word[2])
assertArraysEqual(results2, ['o', 'n', undefined, 'j', 'm'])

const results3 = map(words, word => 'Hello ' + word + ' boss')
assertArraysEqual(results3, ["Hello ground boss", "Hello control boss", "Hello to boss", "Hello major boss", "Hello tom boss"])