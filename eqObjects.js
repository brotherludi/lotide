// const eqObjects = function (object1, object2) {
//   let key1 = Object.keys(object1)
//   let key2 = Object.keys(object2)
//   if (key1.length !== key2.length) {
//     return false
//   } else for (let element of key1) {
//     if (object1[element] !== object2[element]) {//comparing value
//       return false
//     }
//   }
// }

const eqArrays = function (array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true
  } else {
    return false
  }
}

const assertEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`)
  }
}

const eqObjects = function (obj1, obj2) {
  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)
  let result = false
  if (keys1.length === keys2.length) {
    keys1.forEach(element => {
      if (keys2.includes(element) && obj1[element] === obj2[element]) {
        result = true
      } else if (Array.isArray(obj1[element]) && Array.isArray(obj2[element])) {
        result = eqArrays(obj1[element], obj2[element])
      } else {
        result = false
      }
    })
  }
  return result
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)) // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)) // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)) // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)) // => false