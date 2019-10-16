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
1. build a list back to front
2. for each, add an object to the list
3. local binding to hold the part of the list that was built so far and use an assignment like `list = { value: X, rest: list}`
*/
/*
Object.entries() - returns an array of a given object's own enumerable string-keyed property [key, value] pairs
Object.fromEntries() - transforms a list of key-value pairs into an object 
Object.keys()
Object.values()
Object.getOwnPropertyNames()
Map.entries()
Map.keys()
Map.values()
*/
function arrayToList(args) {
  var list = null;
  for (var i = args.length - 1; i >= 0; i--) {
    list = { value: args[i], rest: list };
  }
  return list;
}
// console.log(arrayToList([1, 2, 3]));

//? Write a function listToArray that produces and array from a list.
function listToArray(list) {
  var arr = [];
  for (var node = list; node; node = node.rest) {
    arr.push(node.value);
    console.log(node);
  }
  return arr;
}
console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(value, rest) {
  let list = {
    value: value,
    rest: rest
  };
  return list;
}
console.log(prepend(10, prepend(20, null))); // {value: 10, rest: {value: 20, rest: null}}

function nth(list, num) {
  let answer;
  if (num === 0) {
    return list.value;
  } else {
    return nth(list.rest, num - 1);
  }
}
console.log(nth(arrayToList([10, 20, 30]), 1)); // 20

// ? Deep Comparison - https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript?rq=1
/*
Wite a function deepEqual that takes two values and returns true only if they are the same value or 
are object with the same properties,  where the values of the properties are equal when compared with
a recursive call to deepEqual. 

- Object.keys will be useful when you need to go over the properties of objects to compare them
- need to compare properties and value
- if value is an object, compare property and value
*/
function deepEqual(val1, val2) {
  var val1Keys = Object.keys(val1);
  var val2Keys = Object.keys(val2);
  for (var i = 0; i < val1Keys.length; i++) {
    if (val1Keys[i] === val2Keys[i]) {
      if (val2Keys[i] == 'object' && val1Keys[i] != null) {
        deepEqual(val1Keys[i], val2Keys[2]);
      } else if (val1Keys[i] === val2Keys[i]) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  // for (var i in val1) {
  //   // console.log(i); // here, object
  //   // console.log(val1[i]); // {is: 'an'}, 2
  //   // console.log(val2[i]); // {is: 'an'}, 2
  //   // if (val1[i] == val2[i]) {
  //   if (Object.keys(val1[i]) == Object.keys(val2[i])) {
  //     if (typeof val1[i] == 'object' && val1[i] != null) {
  //       //     deepEqual(val1[i], val2[i]);
  //       //   } else {
  //       //     return true;
  //     }
  //   }
  //   // } else {
  //   //   return false;
  //   // }
  // }
}
var obj = {
  here: {
    is: 'an'
  },
  object: 2
};
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 })); //true
console.log(deepEqual(obj, obj)); // true
console.log(deepEqual(obj, { here: 1, object: 2 })); // false
