//first compare 2 arrays
const eqArrays = function (array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true
  } else {
    return false
  }
}
//then compare 'array compare result' to expected 
const assertEqual = function (eqArrays, expected) {
  if (eqArrays === expected) {
    console.log(`✅ Assertion Passed: ${eqArrays} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${eqArrays} !== ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS