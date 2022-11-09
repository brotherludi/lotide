const assertArraysEqual = function (array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    console.log("✅true")
  } else {
    console.log("🚨false")
  }
}
module.exports = assertArraysEqual;