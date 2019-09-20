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
