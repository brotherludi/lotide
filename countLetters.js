const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  //   let count = {};
  // for (let letter of sentence) {
  //   if (letter === ' ') {
  //     continue;
  //   } else {
  //     count[letter] = (count[letter] || 0) + 1;
  //   } 
  // }
  // return count
  // }
  const count = {};
  for (const letter of sentence) {
    if (letter === ' ') {
      continue
    }
    else if (count[letter]) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  }
  return count;
}

console.log(countLetters("lighthouse in the house"))
assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 })