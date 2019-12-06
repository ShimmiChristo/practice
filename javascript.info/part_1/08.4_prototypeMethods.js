// ! Notes
/* 
- The __proto__ is considered outdated and somewhat deprecated (in browser-only part of the JavaScript standard).

The modern methods are:
- Object.create(proto[, descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.
- Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
- Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.

*/
let animal = {
  eats: true
};
// creates a new object with animal as a prototype
let rabbit = Object.create(animal);
console.log(rabbit.eats); // true
console.log(Object.getPrototypeOf(rabbit) === animal); // true
Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}

//! - Fully identical shallow clone of obj
let clone = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);

//! Add toString to the dictionary
/* 
There’s an object dictionary, created as Object.create(null), to store any key/value pairs.

Add method dictionary.toString() into it, that should return a comma-delimited list of keys. 
Your toString should not show up in for..in over the object.
*/
const obj = Object.create(null);
obj.setPrototypeOf('dictionary');
