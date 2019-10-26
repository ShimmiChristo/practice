//* NOTES

// Tasks
// 1. Hello, object -
/*
  1. Create an empty object user.
  2. Add the property name with the value John.
  3. Add the property surname with the value Smith.
  4. Change the value of the name to Pete.
  5. Remove the property name from the object.
*/

const user = {};
console.log(user);
user.name = 'John';
console.log(user);
user.surname = 'Smith';
console.log(user);
user.name = 'Pete';
console.log(user);
delete user.name;
console.log(user);

// 2. Check for emptiness
/*
  Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise. 
*/
function isEmpty(obj) {
  for (var element in obj) {
    return false;
  }
  return true;
}
var object = {};
isEmpty(object);

// 3. Contact object?
/*
  Is it possible to change an object declared with const? What do you think?
*/
const user = {
  name: 'John'
};
// does it work? - YES
user.name = 'Pete';

// 4. Sum object properties
/*
  We have an object storing salaries of our team
*/
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
function sumObj(salaries) {
  var sum = 0;
  for (var e in salaries) {
    sum += salaries[e];
  }
  return sum;
}
console.log(sumObj(salaries));

// 4. Multiply numeric properties by 2
/*
  Create a function multiplyNumeric(obj) that multiples all properties of obj by 2. 
*/
let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};
function multiplyNumeric(obj) {
  for (var e in obj) {
    if (typeof obj[e] === 'number') {
      obj[e] *= 2;
    }
  }
  return menu;
}
console.log(multiplyNumeric(menu));
