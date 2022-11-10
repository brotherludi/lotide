// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
//   } else {
//     console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
//   }
// };

const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Hello", "Hello");
assertEqual(1, 1);
assertEqual(3, 5);