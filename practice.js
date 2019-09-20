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

// Write a funciton that takes a string as a parameter and returns the frequency of each letter of the alphabet that is found in that string
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

// The overarching rule is that this is determined at the time a function is invoked by inspecting where it’s called, its call site. It follows these rules, in order of precedence.
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
