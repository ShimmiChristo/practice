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

