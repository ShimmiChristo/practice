// Object init - 3 ways
// 1. object literal
var obj = {};
obj['a'] = 1;
obj['name'] = 'Chris';
obj['age'] = '29';
console.log(obj);

// 2. new Object()
var person = new Object();
person.firstName = 'Chris';
person.lastName = 'Shimmin';
console.log(person);

// 3. Object.create()
let obj = {
  name: 'Chris',
  age: '29'
};
var person1 = Object.create(obj);
console.log(person1);

// hasOwnProperty
// - check if key exists
var obj = new Object();
obj.name = 'Chris';
console.log(obj.hasOwnProperty('name'));
console.log(obj);

// Object.keys
// - method returns an array of a given object's own enumerable property names, in the same order as we get with a normal loop.

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};
console.log(Object.keys(object1)); // ["a", "b", "c"]

// Obect.values
// - method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop
// (the difference being that a for-in loop enumerates properties in the prototype chain as well).

const object = {
  a: 'somestring',
  b: 42,
  c: false
};
var values = Object.values(object);
console.log(values); // ['something', 42, false];

var objects = [];
for (var element in object) {
  objects.push(object[element]);
  console.log(object[element]);
}
console.log(objects);
