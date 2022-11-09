//first compare 2 arrays
const eqArrays = function (array1, array2) {
    return JSON.stringify(array1) === JSON.stringify(array2)
}

//then compare 'array compare result' to expected 
const assertEqual = function (eqArrays, expected) {
  if (eqArrays === expected) {
    console.log(`✅ Assertion Passed: ${eqArrays} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${eqArrays} !== ${expected}`);
  }
};

module.exports = eqArrays;

// module.exports = {
//   eqArrays:eqArrays,
//   assertEqual:assertEqual,
// }