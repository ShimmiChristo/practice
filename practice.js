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
