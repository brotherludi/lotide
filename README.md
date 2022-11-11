# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @brotherludi/lotide`

**Require it:**

`const _ = require('@brotherludi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  `assertArraysEqual`: Function for asserting that two arrays are equal.
  `assertEqual`: A function compare two values and tell us if they match or not.
  `assertObjectsEqual`: Check if two objects are equal.
  `countLetters`: Return a count of each of the letters in a sentence.
  `countOnly`: Count how many times a name appears in an array.
  `eqArrays`: Takes in two arrays and returns true or false, based on a perfect match.
  `eqObjects`: Take in two objects and returns true or false, based on a perfect match.
  `findKey`: Using callback looping over object to find certain value.
  `findKeyByValue`: Search for a key on an object where its value matches a given value.
  `flatten`: Flatten an array with other arrays inside into a single-level array.
  `head`: A function to retrieve the first element from the array.
  `letterPositions`: Return all the indices in the string where each character is found.
  `map`: Function will return a new array based on the results of the callback function.
  `middle`: Return the middle-most element(s) of the given array.
  `tail`: A function to returns the tail of an array.
  `takeUntil`: Collecting items from an array until the callback returns a truthy value.
  `without`: Return a subset of a given array, removing unwanted elements.
  