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
Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. 
Finally, it calls the update function to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.
*/
function testFunction() {}
function updateFunction() {}
function bodyFunction() {}
function loop(value, testFunction, updateFunction, bodyFunction) {}

loop(3, n => n > 0, n => n - 1, console.log);
