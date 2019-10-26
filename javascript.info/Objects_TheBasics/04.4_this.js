//! NOTES
let user = {
  name: 'John',
  hi() {
    alert(this.name);
  },
  bye() {
    alert('Bye');
  }
};

user.hi(); // John (the simple call works)

// now let's call user.hi or user.bye depending on the name
(user.name == 'John' ? user.hi : user.bye)(); // Error!
/*
An error is thrown bc the result of a property access user.hi is not a function, but a value of Reference Type.
*/

let user = {
  name: 'John',
  hi() {
    alert(this.name);
  }
};

// split getting and calling the method in two lines
let hi = user.hi;
hi(); // Error, because this is undefined

// Arrow functions have no 'this'
// useful when we do not want to have a seperate this
let user = {
  firstName: 'Ilya',
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  }
};
user.sayHi(); // Ilya

//! TASKS
//? What is the result of this code?
let user = {
  name: 'John',
  go: function() {
    alert(this.name);
  }
};
user.go(); // John

//? Explain the value of 'this'
/*
In the code below we intend to call obj.go() method 4 times in a row.
But calls (1) and (2) works differently from (3) and (4). Why?
*/
let obj, method;
obj = {
  go: function() {
    console.log(this);
  }
};
obj.go(); // (1) [object Object]
obj.go(); // (2) [object Object]
(method = obj.go)(); // (3) undefined
(obj.go || obj.stop)(); // (4) undefined

//? Create a calculator
/*
Create an object calculator with three methods:
1. read() prompts for two values and saves them as object properties.
2. sum() returns the sum of saved values.
3. mul() multiplies saved values and returns the result.
*/

let calculator = {
  read: function(a, b) {
    this.valA = a;
    this.valB = b;
  },
  sum: function() {
    return this.valA + this.valB;
  },
  mul: function() {
    return this.valA * this.valB;
  }
};
calculator.read(8, 4);
console.log(calculator.sum());
console.log(calculator.mul());

//? Chaining
/*
Now, if we need to make several calls in sequence, can do it like this:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

Modify the code of up, down and showStep to make the calls chainable, like this:
ladder.up().up().down().showStep(); // 1
*/
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    // shows the current step
    console.log(this.step);
  }
};
ladder
  .up()
  .up()
  .up()
  .down()
  .showStep(); // 1
