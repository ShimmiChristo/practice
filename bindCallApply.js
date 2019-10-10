//! Bind
/*
  - a method which returns a function allowing you to pass an array and n number of args. 
  - it runs the function in the context of the first arg (most probably an object)
  - can be used for curring functions. 
  - we can also use for events like onClick where we don't know when they will be fired 
    but the element or context will be known. 
*/
var person1 = { firsName: 'Lebron', lastName: 'James' };
var person2 = { firsName: 'Kobe', lastName: 'Bryant' };
function say() {
  console.log(`Hello ${this.firsName} ${this.lastName}`);
}
var sayHelloJames = say.bind(person1);
var sayHelloKobe = say.bind(person2);
console.log(sayHelloJames());
console.log(sayHelloKobe());

// Bind also preserves the context of this for future execution.
// Bind is used mainly for adding events like:
element.addEventListener(‘click’, this.onClick.bind(this), false);


//! Call
/*
  - call method takes the first arg to be the context and it accepts several other args. 
  - the subsequent args are pass to the function as args
*/
var person1 = { firsName: 'Lebron', lastName: 'James' };
var person2 = { firsName: 'Kobe', lastName: 'Bryant' };
function say(greeting) {
  console.log(`${greeting} ${this.firsName} ${this.lastName}`);
}
say.call(person1, 'Hello'); // Hello Lebron James

function Product(name, price) {
  this.name = name;
  this.price = price;
}
function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}
var cheese = new Food('Cheese', 5);
console.log(cheese.name);

//! Apply
/*
  - apply method solves the above limitation by accepting the args in the form of array. 
  - so an array is passed as a second arg
*/
var person1 = { firsName: 'Lebron', lastName: 'James' };
var person2 = { firsName: 'Kobe', lastName: 'Bryant' };
function say(greeting) {
  console.log(`${greeting} ${this.firsName} ${this.lastName}`);
}
say.apply(person1, ['Hello']); // Hello Lebron James

// this is popular method to convert arguments to array
Array.prototype.slice.call(arguments)