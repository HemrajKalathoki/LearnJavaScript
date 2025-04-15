// Arrays

const fruits = ['apple', 'banana', 'orange', 'grape'];
const numbers = [1, 2, 3, 4, 5];
const mixedArray = ['apple', 1, true, null, undefined, { name: 'John' }];
const emptyArray = [];
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const arrayWithDifferentTypes = [1, 'apple', true, null, undefined, { name: 'John' }];
const arrayWithObjects = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 35 },
];
const arrayWithFunctions = [
  function greet() { console.log('Hello!'); },
  function add(a, b) { return a + b; },
  function multiply(a, b) { return a * b; },
];
const arrayWithDates = [
  new Date('2023-01-01'),
  new Date('2023-02-01'),
  new Date('2023-03-01'),
];
const arrayWithRegex = [
  /abc/g,
  /def/i,
  /ghi/m,
];
const arrayWithNulls = [null, null, null];
const arrayWithUndefineds = [undefined, undefined, undefined];
const arrayWithBooleans = [true, false, true, false];

const arrayObject = new Array(1,2,3,4,5);

// const arrayWithSpreadOperator = [...fruits, ...numbers, ...mixedArray];
// console.log(arrayWithSpreadOperator); // ['apple', 'banana', 'orange', 'grape', 1, 2, 3, 4, 5, 'apple', 1, true, null, undefined, { name: 'John' }]

// Array methods

// const fruits = ['apple', 'banana', 'orange', 'grape'];
// fruits.push('kiwi'); // Adds 'kiwi' to the end of the array
// console.log(fruits); // ['apple', 'banana', 'orange', 'grape', 'kiwi']
// fruits.pop(); // Removes the last element ('kiwi')
// console.log(fruits); // ['apple', 'banana', 'orange', 'grape']
// fruits.unshift('mango'); // Adds 'mango' to the beginning of the array
// console.log(fruits); // ['mango', 'apple', 'banana', 'orange', 'grape']
// fruits.shift(); // Removes the first element ('mango')
// console.log(fruits); // ['apple', 'banana', 'orange', 'grape']

// console.log(fruits.length); // 4 (number of elements in the array)
// console.log(fruits.includes('banana')); // true (checks if 'banana' is in the array)
// console.log(fruits.indexOf('orange')); // 2 (index of 'orange' in the array)

// const newFruits = fruits.join();
// console.log(fruits); // ['apple', 'banana', 'orange', 'grape']
// console.log(newFruits); // 'apple,banana,orange,grape' (joined string)
// console.log(typeof newFruits); // string (type of the joined string)


// slice, splice, and concat methods

console.log("fruits array before slice :", fruits); // ['apple', 'banana', 'orange', 'grape']
const newSlicedFruits = fruits.slice(1, 3); // ['banana', 'orange'] (slices from index 1 to index 3)
console.log("newSlicedFruits array : ", newSlicedFruits); // ['banana', 'orange']
console.log("fruits array after slice : ",fruits); // ['apple', 'banana', 'orange', 'grape']

const newSplicedFruits = fruits.splice(1, 3); // ['banana', 'orange', 'grape'] (removes 3 elements starting from index 1)
console.log("newSplicedFruits array : ", newSplicedFruits); // ['banana', 'orange', 'grape']    
console.log("fruits array after splice : ", fruits); // ['apple'] (remaining elements after splice)


const firstArray = ["Hemraj", "Kalathoki"];
const secondArray = ["Software", "Developer"];

console.log(...firstArray, ...secondArray); // spread operator : it's open the array and spread over

console.log(firstArray.concat(secondArray));  // it concat the two arrays in one

const arrayInArray = [1, 2, 3, [4, 5], 6, [7, [8, 9, [10]]]];
console.log(arrayInArray.flat(Infinity));  // it goes to the level of arrays and make them in one
// console.log(arrayInArray);

console.log(arrayInArray);



console.log(Array.isArray(arrayInArray));

console.log(Array.from("Hemraj"));
console.log(Array.of(100, 200, 300));

