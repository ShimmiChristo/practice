// this keyword
/*
it allows us to reuse functions with different contexts
4 Rules
1. Implicit Binding
2. Explicit Binding - Bind(), Call(), Apply()
3. new Binding
4. window Binding
* Where is this function invoked?
*/

//* 1. Implicit Binding (most common)
// left of the Dot at CALL TIME

var me = {
  name: 'Chris',
  age: 29
  // sayName: function() {
  //   console.log(this.name);
  // }
};
var you = {
  name: 'John',
  age: 30
};
// me.sayName();

var sayNameMixin = function(obj) {
  obj.sayName = function() {
    console.log(this.name);
  };
};
// pass in object into sayNameMixin
// the objects are decorated with sayName function
sayNameMixin(me);
sayNameMixin(you);
me.sayName();
you.sayName();

var Person = function(name, age) {
  return {
    name: name,
    age: age,
    sayName: function() {
      console.log(this.name);
    },
    mother: {
      name: 'Stacy',
      sayName: function() {
        console.log(this.name);
      }
    }
  };
};
var jim = Person('jim', 30);
jim.sayName(); // jim
jim.mother.sayName(); //Stacy

//* 2. Explicit Binding
// call, apply, bind

var sayName = function(lastName) {
  console.log('My name is ' + this.name);
  console.log('my last name is ' + lastName);
};
var stacy = {
  name: 'Stacy',
  age: 44
};
sayName.call(stacy); // My name is Stacy
sayName.call(stacy, 'LAst Name'); //my last name is LAst Name

// Bind returns a new function. Does not invoke immediately
var nameFunction = sayName.bind(stacy, 'Smith');
nameFunction();

//! ----
this.x = 9; // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() {
    return this.x;
  }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81

//* 3 new binding
var Animal = function(color, name, type) {
  //this = {}; // this keyword is bound to the new keyword being constructed
  this.color = color;
  this.name = name;
  this.type = type;
};
var zebra = new Animal('black and white', 'Zorro', 'Zebra');

//* 4 window binding
// the default is the window object
