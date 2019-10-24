/*
- forEach()
- filter()
- map()
- reduce()
- some()
- findIndex()

*/

//! FLATTENING
/*
Use the reduce method in combination with the concat method to "flatten" an array
of array into a single array that has all the elements of the original arrays.
*/
let arrays = [[1, 2, 3], [4, 5], [6]];
// [1,2,3,4,5,6]
let newArr = arrays.reduce((collection, array) =>
  collection.concat([...array])
);
console.log(newArr);

//! YOUR OWN LOOP
/*
Write a higher-order function loop that provides something like a for loop statement. 
It takes a value, a test function, an update function, and a body function.
Each iteration, it first runs the test function on the current loop value and stops if that returns false. 
Then it calls the body function, giving it the current value. 
Finally, it calls the update function to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.
*/

function loop(value, test, body, update) {
  for (let i = value; test(i); i = body(i)) {
    update(i);
  }
}

function loop(value, test, body, update) {
  for (var i = 0; i < value; i++) {
    if (test(value)) {
      update(value);
      return loop(body(value), test, body, update);
    }
  }
  return false;
}

loop(3, n => n > 0, n => n - 1, console.log);
loop(-1, n => n > 0, n => n - 1, console.log);

//! EVERYTHING
/*
Implement every as a function that takes an array and a predicate function as
parameters. 
Write two versions, one using a loop and one using the some method. 

Every - De Morgan's Law 
a && b equals !(!a || !b)
all elements in the array match if there no element in the array that does not match
*/
function every(array, test) {
  return !array.some(element => !test(element));
}
console.log(every([2, 4, 16], n => n < 10)); // false
console.log(every([1, 3, 5], n => n < 10)); // true
console.log(every([], n => n < 10)); // true

function every(array, test) {
  for (var element of array) {
    if (!test(element)) return false;
  }
  return true;
}
console.log(every([2, 4, 16], n => n < 10)); // false
console.log(every([1, 3, 5], n => n < 10)); // true
console.log(every([], n => n < 10)); // true

//! DOMINANT WRITING DIRECTION
/*

*/

function dominantDirection(text) {
  // code here
}
console.log(dominantDirection('Hello!')); // ltr
console.log(dominantDirection('Hey, مساء الخير')); // rtl
