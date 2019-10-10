//! The Sum of a Range
/*
 Write a range function that takes two args, start and end, and returns an array containing 
 all the numbers from start up tp (and including) end. 
*/
function range(start, end) {
  var array = [];
  if (end >= start) {
    while (start <= end) {
      array.push(start);
      start++;
    }
  } else {
    array = -1;
  }
  return array;
}
range(10, 10);

/*
  Next, write a sum function that takes an array of numbers and returns the sum of these, 
  numbers. Run the example program and see whether it does indeed return 55. 
*/
function sum(arr) {
  var sum = 0;
  for (var i of arr) {
    sum += i;
  }
  return sum;
}
console.log(sum(range(1, 10)));

//! Reversing an Array
/*
- Write two functions, reverseArray and reverseArrayInPlace
- reverseArray takes an array as arg and produces a new array that has the same 
elements in the inverse order. 
- reverseArrayInPlace, modifies the array given as argument by reversing its elements. 
- neither may use the standard reverse method. 
*/
var arr = [1, 2, 3, 4, 5];
function reverseArray(arr1) {
  var newArr = [];
  for (var i = arr1.length - 1; i >= 0; i--) {
    newArr.push(arr1[i]);
  }
  return newArr;
}
console.log(reverseArray(arr));

var arr = [1, 2, 3, 4, 5];
function reverseArray(arr1) {
  var newArr = [];
  arr1.map((elem, iter) => {
    newArr.push(arr1.length - iter);
  });
  return newArr;
}
console.log(reverseArray(arr));

// with "{ }"
var arr = [1, 2, 3, 4, 5];
function reverseArray(arr1) {
  var newArr = arr1.map((elem, iter) => {
    return arr1[arr1.length - 1 - iter];
  });
  return newArr;
}
console.log(reverseArray(arr));
// without "{ }"
var arr = [1, 2, 3, 4, 5];
function reverseArray(arr1) {
  var newArr = arr1.map((elem, iter) => arr1[arr1.length - 1 - iter]);
  return newArr;
}
console.log(reverseArray(arr));

//* Reverse the array in place
var arr = [1, 2, 3, 4, 5];
function reverseArrayInPlace(arr2) {
  var half = Math.floor(arr2.length / 2);
  for (var i = 0; i < half; i++) {
    var temp = arr2[arr2.length - 1 - i];
    arr2[arr2.length - 1 - i] = arr2[i];
    arr2[i] = temp;
  }
  return arr2;
}
console.log(reverseArrayInPlace(arr));

//! A LIST
//? Write a function arrayToList that builds up a list structure.
/*
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
*/
function arrayToList(args) {
  var list = {};
  for (var element of args) {
    list[]
  }
  return list;
}
console.log(arrayToList([1]));

//? Write a function listToArray that produces and array from a list.
