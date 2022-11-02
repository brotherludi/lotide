const eqArrays = function (array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true
  } else {
    return false
  }
}

// const assertEqual = function (eqArrays, expected) {
//   if (eqArrays === expected) {
//     console.log(`✅ Assertion Passed: ${eqArrays} === ${expected}`);
//   } else {
//     console.log(`🛑 Assertion Failed: ${eqArrays} !== ${expected}`);
//   }
// };

const assertEqual = function (actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

// const without = function (source, itemsToRemove) { 
//   return source.filter(function(elements){ 
//       return elements != itemsToRemove; 
//   });
// }

const without = function (source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1)
      }
    }
  }
  return source
}

// console.log(without([1, 2, 3], [1]))
// console.log(without(["1", "2", "3"], [1, 2, "3"]))

assertEqual(without([1, 2, 3], [1]), [2, 3])
assertEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
