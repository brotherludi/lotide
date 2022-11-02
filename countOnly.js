const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    // inside the loop:
    if (itemsToCount[item]) {
      // increment the counter for each item:
      //   set a property with that string key to:
      //     the value that was already there (or zero if nothing there) with 1 added to it.
      if (results[item]) { //What value Fang is in the results object? if it is a truthly value it will enter the if block(line20), if it's falsly it will go to the else block.
        results[item] += 1; //second time compuer sees Fang then add 1
      } else { //computer won't look at Karl, Salima because they are not itemsToCount
        results[item] = 1; //first time computer sees Fang it will become 1: Fang {Fang: 1}
      }
    }
    /*console.log(item);*/ console.log(item, results);

  }

  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
/*{
  Jason: 1,
  Fang: 2,
} */
const result1 = countOnly(firstNames/*allItems*/, {
  "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false /*itemsToCount*/
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);