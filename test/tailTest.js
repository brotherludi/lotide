const assertEqual = require('../assertEqual');
const tail = require('../tail');

console.log(tail([5,6,7]));
console.log(tail(["Hello","Lighthouse","Labs"]));

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"