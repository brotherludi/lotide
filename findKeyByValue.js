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

const findKeyByValue = function (object, value) {
  const objKeys = Object.keys(object)
  for (let element of objKeys) {
    if (object[element] === value) {
      return element
    }
  }
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
// console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"))
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);