const eqArrays = function (array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true
  } else {
    return false
  }
}

const assertEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🚨 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const middle = (arr) => {
  if (arr.length <= 2) {
    return []
  } else if (arr.length % 2 === 0) {
    return arr.slice(arr.length / 2 - 1, arr.length / 2 + 1)
  } else {
    return [arr[(arr.length / 2 - 0.5)]]
  }
}

assertEqual(middle([1]), [])
assertEqual(middle([1, 2]), [])
assertEqual(middle([1, 2, 3]), [2])
assertEqual(middle([1, 2, 3, 4, 5]), [3])
assertEqual(middle([1, 2, 3, 4]), [2, 3])
assertEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])