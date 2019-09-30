import { futimesSync } from 'fs';

// 1. every()
// - method tests whether all elements in the array pass the test implemented by the provided function.
// - it returns a boolean value
var arr1 = [1, 30, 25, 39, 99, 9];
var isBelowThreshold = currentVal => {
  return currentVal < 40;
};
console.log(arr1.every(isBelowThreshold));

// 2. some()
// - method tests whether at least one element in the array passes the test implemented by the provided function.
// - it returns a boolean value
var arr1 = [1, 30, 25, 39, 99, 9];
var isBelowThreshold = currentVal => {
  return currentVal % 2;
};
console.log(arr1.some(isBelowThreshold));

const fruits = ['apple', 'banana', 'mango', 'guava'];
function checkAvailability(arr, val) {
  return arr.some(arrVal => {
    return val === arrVal;
  });
}
checkAvailability(fruits, 'apple');

// 3. find()
// - method returns the VALUE of the FIRST ELEMENT in the provided array that satisfies the provided testing funciton.
var arr1 = [1, 30, 25, 39, 99, 9];
var arr2 = [5, 4, 2, 0, 3, 1];
// SORT METHOD
var sort = (a, b) => {
  console.log('a ' + a);
  console.log('b ' + b);
  return a - b;
};

findNum = element => {
  return element > 1;
};
var newArr = arr2.sort(sort);
console.log(newArr);
console.log(newArr.find(findNum));

// 4. findIndex()
// - method returns the INDEX of the first element in the array THAT SATISFIES THE PROVIDED TESTING FUNCTION. Otherwise, it returns -1.
var arr = [1, 30, 25, 39, 99, 9];
const sortFunction = (a, b) => {
  return a - b;
};
arr.sort(sortFunction);
function findNum(element) {
  return element > 10;
}
console.log(arr.findIndex(findNum));

// 5. indexOf()
// - method returns the first index at which the given element can be found in the array, or -1 if it is not present
// Question - Find if a value exists inside a function
const fruits = ['apple', 'banana', 'mango', 'guava'];
function findFruit(fruit) {
  return fruits.indexOf(fruit) !== -1 ? 'in array' : 'not in array';
}
console.log(findFruit('apple'));

// 6. includes()
// - method determines whether an array includes a certain value among its entries
// returns true or false
const fruits = ['apple', 'banana', 'mango', 'guava'];
const findFruit = fruit => {
  return fruits.includes(fruit);
};
console.log(findFruit('pear'));
