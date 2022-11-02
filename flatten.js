const eqArrays = function (array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true
  } else {
    return false
  }
}

const assertEqual = function (actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🚨 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const flatten = (arr) => {
  return arr.flat()
}

// console.log(flatten([1, 2, [3, 4], 5, [6]]))

assertEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
