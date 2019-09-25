// Arrays - unshift(), push(), splice() or shift(), pop(), concat(), map(), forEach(), var, let, const
let arr = ['one', 'two', 'three', 'four'];
let arr2 = ['5', '6', '7'];
// let - is a signal that the variable may be reassigned
// const - is a signal that the variable wont be reassigned
//unshift() - adds one or more elements to the beginning and returns the new length of the array
arr.unshift('zero');
['zero', ...arr];
// push() - adds one or more elements to the end of an array and returns the new length of the array
arr.push('five');
[...arr, 'five'];
// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// shift() -removes the FIRST element from an array and return that removed element.
arr.splice(0, 1);
arr.shift();
// pop() - removes the last element and returns that element
arr.pop();
// concat()
arr.concat(arr2);
arr = [...arr, ...arr2];

console.log(arr);

//Objects
// 3 ways to initialize Objects - new Object(), Object.create(), const init = {} (literal notation)
var a = 'foo';
var b = 42;
var c = {};
var object2 = { a: a, b: b, c: c };
console.log(object2.b);
console.log(object2.c);

// Object.values()
console.log(Object.values(object2));

// Object.keys()
console.log(Object.keys(object2));

// Constructor Function (new Object())
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const myCar = new Car('Chevy', 'Colorado', 2017);
console.log(myCar);
// object.create method
var Animal = {
  type: 'Mammal',
  displayType: function() {
    console.log(this.type);
  }
};
var animal1 = Object.create(Animal);
console.log(animal1.displayType());
var fish = Object.create(Animal);
fish.displayType();
// Classes vs Prototypal Inheritance

class TestClass {
  constructor(foo, bar) {
    this.foo = foo;
    this.bar = bar;
  }

  getFoo() {
    return this.foo;
  }
}

const varTestClass = new TestClass('foo param', 'bar param');
// console.log(varTestClass.getFoo);

// Write a function that takes a string as a parameter and returns the frequency of each letter of the alphabet that is found in that string
// display the largest
// ASK QUESTIONS
// 1. Is case important?

function letterFreq(string) {
  let str = string.toLowerCase();
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    // if (obj[str[i]]) {
    //   obj[str[i]] = obj[str[i]] + 1;
    // } else {
    //   obj[str[i]] = 1;
    // }
    // ternary
    obj[str[i]] = obj[str[i]] ? ++obj[str[i]] : 1;
  }
  // return obj;
  console.log(Math.max(...Object.values(obj)));
}
letterFreq('apple');

// write a function and determine if that string is a palidrome

function palidrome(string) {
  const reverse = string
    .toLowerCase()
    .split('')
    .reverse()
    .join('');
  if (string.toLowerCase() === reverse) {
    return reverse;
  }
}
palidrome('carac');

// Explain event delegation.

// Explain how 'this' works in JavaScript.
// Can you give an example of one of the ways that working with this has changed in ES6?

// The overarching rule is that 'this' is determined at the time a function is invoked by inspecting where it’s called, its call site. It follows these rules, in order of precedence.
// 1. If the new keyword is used when calling the function, this inside the function is a brand new object.
function ConstructorExample() {
  console.log(this);
  this.value = 10;
  console.log(this);
}
new ConstructorExample();
// -> {}
// -> { value: 10 }

// 2. If apply, call, or bind are used to call a function, this inside the function is the object that is passed in as the argument.
function fn() {
  console.log(this);
}
var obj = {
  value: 5
};
var boundFn = fn.bind(obj);
boundFn(); // -> { value: 5 }
fn.call(obj); // -> { value: 5 }
fn.apply(obj); // -> { value: 5 }

// 3. If a function is called as a method — that is, if dot notation is used to invoke the function — this is the object that the function is a property of. In other words, when a dot is to the left of a function invocation, this is the object to the left of the dot. (ƒ symbolizes function in the code blocks)
var obj = {
  value: 5,
  printThis: function() {
    console.log(this);
  }
};
obj.printThis(); // -> { value: 5, printThis: ƒ }

// 4. If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. In a browser, it’s window.
function fn() {
  console.log(this);
}
// If called in browser:
fn(); // -> Window {stop: ƒ, open: ƒ, alert: ƒ, ...}
//How do you create a private variable in JS? -- Using Scope
function secretVar() {
  var private = 'super secret code';
  return function() {
    return private;
  };
}
var getPassword = secretVar();
console.log(secretVar());
console.log(getPassword());

function Global() {
  var foo = 'this is foo';
  this.local = () => {
    return 'this is local';
  };
}

var getFoo = new Global();
console.log(getFoo.local());

//  What is the output of this variable?
var num = 4;
function outer() {
  var num = 2;
  function inner() {
    num++;
    var num = 3;
    console.log(num);
  }
  inner();
}
outer();

// What is the output?
console.log(typeof typeof 1); // string

// What is the output?

var hero = {
  _name: 'John Doe',
  getSecretIdentity: function() {
    return this._name;
  }
};
// var stoleSecretIdentity = hero.getSecretIdentity;
var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

console.log(stoleSecretIdentity()); // undefined
console.log(hero.getSecretIdentity()); // John Doe

// What is the value of i each time it is logged?
for (var i = 0; i < 10; i++) {
  window.setTimeout(function() {
    console.log(i);
  }, i * 100);
}
// 10 ten times

// Write a funciton that calculates the nth term in the fibonacci sequence, where this sequence is defined as a series of number (0 1 1 2 3 5 8 13 ...), and where the sum of any term is the result of adding the previous two terms. Note: make sure that your solution can calculate larger thems (n > 30)!

function fib(n) {
  let arr = [0, 1];
  for (i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  console.log(arr);
}
//recursive
function fibRec(n) {
  if (n < 2) {
    return n;
  }
  return fibRec(n - 1) + fibRec(n - 2);
}

fib(1);
fib(2);
fib(7);

// What is React and why should we use it?

// CSS - Floats, Border Box

// JS - Promises, Async and Await, Observables, Scoping, [var, let, and const], closure, protypal inheritance vs es6 classes, hoisting,

// Callbacks, Promises, Async/Await
function add(x, y) {
  return x + y;
}
function addFive(x, addReference) {
  console.log(x);
  console.log(addReference(5, 3));
  return addReference(5, x);
}
addFive(10, add);
// Higher Order Function - when a function that receives another function as its argument
function higherOrderFunction(x, callback) {
  return callback(5, x);
}
higherOrderFunction(10, add);

// Promises
function onSuccess() {
  console.log('sucess!');
}
function onError() {
  console.log('error');
}
var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 2000);
});
promise.then(onSuccess);
promise.catch(onError);

// Let and Const have block scoping. The const properties inside const can be changed, however you cannot change the value.
// lexical scoping
function outer() {
  var name = 'chris';
  function displayName() {
    console.log(name);
  }
  return displayName();
}
outer();
//closures
function closureOutside() {
  var name = 'chris';
  function displayName() {
    console.log(name);
  }
  return displayName;
}
var outerFunc = closureOutside();
outerFunc();

// White boarding questions
// String manipulation, palindromes, Fibonacci, fizzbuzz

// FizzBuzz
// Write a short program that prints each number from 1 to 100 on a new line. For each multiple of 3, print "Fizz" instead of the number. For each multiple of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
function fizzbuzz() {
  for (i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
fizzbuzz();

// Make this work
// duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

function duplicate(arr) {
  // console.log(...arr, ...arr);
  const newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
  // console.log(newArr.concat(arr));
}
duplicate([1, 2, 3, 4, 5]);

// API - REST vs Restful
// REST - Representational State Transfer - an architectural style of development
// RESTful - is used to refer to to web services implementing such an architecture (so an adjective)

/* JS Questions
object-oriented vs. functional programming
1.  Functional Programming - Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects. Functional programming is declarative rather than imperative, and application state flows through pure functions.
 - Why functional programming? 
Its pure function, provides confidence of not changing things outside of its scope.
 */
let meetups = [
  { name: 'JS', isActive: true, members: 450 },
  { name: 'Angular', isActive: true, members: 900 },
  { name: 'Node', isActive: false, members: 900 }
];
// Imperative -- Focuses on describing how program operates
// Imperative programs spend lines of code describing the specific steps used to achieve the desired results — the flow control: How to do things.
let activeMeetups = [];
for (let i = 0; i < meetups.length; i++) {
  let m = meetups[i];
  if (m.isActive) {
    activeMeetups.push(m);
  }
}
console.log(activeMeetups);
// Output will be array of 2 elements where isActive is true

// Declarative -- Focuses on what the program should accomplish (Functional Programming)
// Declarative programs abstract the flow control process, and instead spend lines of code describing the data flow: What to do. The how gets abstracted away.
let activeMeetupsFP = [];
activeMeetupsFP = meetups.filter(m => {
  return m.isActive;
});
console.log(activeMeetupsFP);
// Output will be array of 2 elements where isActive is true

// .map(), .filter(), .reduce()
const items = [
  { name: 'ball', points: 2 },
  { name: 'coin', points: 3 },
  { name: 'candy', points: 4 }
];
// Use map to transform the following array of values into an array of item names:
const mapResult = items.map(i => {
  return i.name;
});
console.log(mapResult);

// Use filter to select the items where points are greater than or equal to 3:
const filterResult = items.filter(i => {
  return i.points >= 3;
});
console.log(filterResult);

// Use reduce to sum the points:
const items = [
  { name: 'ball', points: 2 },
  { name: 'coin', points: 3 },
  { name: 'candy', points: 4 }
];
const reduceResult = items.reduce((i, value) => {
  return i.points + value.points;
});
console.log(reduceResult);
