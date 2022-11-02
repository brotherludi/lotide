const eqObjects = function (object1, object2) {
  if (JSON.stringify(object1) === JSON.stringify(object2)) {
    return true
  } else {
    return false
  }
}

const assertEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = []
    }
    results[sentence[i]].push(i)
  }
  return results
}

console.log(JSON.stringify(letterPositions("hello")))

assertEqual(letterPositions("hello"), { "h": [0], "e": [1], "l": [2, 3], "o": [4] })
// hello
// { 
//   h: [0],
//   e: [1],
//   l: [2,3],
//   o: [4],
// }