/*
- forEach()
- filter()
- map()
- reduce()
- some()
- findIndex()

*/
import { SCRIPTS } from './SCRIPTS/SCRIPTS.js';

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
Write a function that computes the dominant writing direction in a string of text. 
Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the characters that have a script associated with them. 
The characterScript and countBy functions defined earlier in the chapter are probably useful here.
*/
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}
function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({ name }) => name != 'none');

  if (counted.length == 0) return 'ltr';

  return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
}
console.log(dominantDirection('Hello!')); // ltr
console.log(dominantDirection('Hey, مساء الخير')); // rtl

function dominantDirection(text) {
  // let scripts = countBy(text, char => {
  //   let script = characterScript(char.codePointAt(0));
  //   return script ? script.name : 'none';
  // });
  // console.log(scripts);

  // return characterScript(text.codePointAt(0));
  for (var i = 0; i < text.length; i++) {
    console.log('text i ' + text[i] + ' : ' + text.codePointAt(i));
  }
}
console.log(dominantDirection('Hello!')); // ltr
console.log(dominantDirection('Hey, مساء الخير')); // rtl
