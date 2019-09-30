// for/of
// iterates through each element in an array
// loops through the values of an iterable object
var arr = [3, 5, 7];
arr.hello = 'hello';

for (var i of arr) {
  console.log(i);
}

// for/in
// iterates through each element in an object (arrays are objects)
// loops through the properties of an object
for (var i in arr) {
  console.log(arr);
}
// output
// var obj = {
//   1: 3,
//   2: 5,
//   3: 7,
//   hello: 'hello'
// };

// for loop
// - loops through a block of code a number of times
var arr = [3, 5, 7];
const forLoop = () => {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
const runLoop = forLoop();

// while loop
// - loops through a block of code while a specified condition is true
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// do/while loop
// - loops through a block of code once, and then repeats the loop while a specified condition is true
do {
  console.log(i);
  i++;
} while (i < 10);

// forEach()
// - executes a provided function once for each array element
// - changes original array.
// - good if you want to do something with it and save it to a DB
// - you never return with a forEach. Throws away return values and always returns undefined.
// - allows a callback function to mutate the current array
var arr = [3, 5, 7];
arr.forEach(element => {
  console.log(element);
});

// map()
// - only use it when you are using the array it returns
// - creates a new array.
// - faster and good if you want to alter an array
// - allocates memory and stores the return values.
var arr = [3, 5, 7];
const map = arr.map(x => x + 1);
console.log(map);

var keyArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }
];
var reformattedArray = keyArray.map(obj => {
  var rObj = {};
  // console.log(obj.value);
  rObj[obj.key] = obj.value;
  return rObj;
});
console.log(reformattedArray);

const items = [
  { name: 'ball', points: 2 },
  { name: 'coin', points: 3 },
  { name: 'candy', points: 4 }
];
const map = items.map(x => {
  var obj = {};
  obj[x.name] = x.points;
  return obj;
});
console.log(map);

// filter()
// - creates a new array and with all the elements that pass the test implemented by the provided function
var arr = [3, 5, 7];
const isBigEnough = val => {
  return val > 3;
};
// const filteredArr = arr.filter(num => num > 3);
var filteredArr = arr.filter(isBigEnough);
console.log(filteredArr);

// reduce()
// - the reduce method executes a reducer functino (that you provide) on each element of the array, resulting in a single output value
var arr = [3, 5, 7, 6];
var reducer = (accumilator, currentValue) => {
  return accumilator + currentValue;
};
console.log(arr.reduce(reducer));
