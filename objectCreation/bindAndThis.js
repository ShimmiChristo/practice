// basic object
let dog = {
  sound: 'woof',
  talk: function() {
    // console.log(this.sound);
  }
};

dog.talk(); // woof
let talkFunction = dog.talk;
// talkFunction(); // undefined bc this is bound where it is called, not defined
let boundFunction = talkFunction.bind(dog); // bind forces this to be dog
boundFunction(); // woof

// let button = document.getElementById('button');
// button.addEventListener('click', dog.talk.bind(dog));

//! this and Bind() examples
// more examples of this and bind
function talk(sound) {
  console.log(this.sound);
}
let dog2 = {
  sound: 'woof'
};
let dogSound = talk.bind(dog2);
dogSound();

let talk = function() {
  console.log('something');
  console.log(this.sound);
};
let dogSound = {
  speak: talk,
  sound: 'woof'
};
dogSound.speak();

//! new keyword
function Person(saying) {
  this.saying = saying;
}
Person.prototype.talk = function() {
  console.log('the dog says', this.saying);
};
function newer(constructor) {
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  var argsArray = Array.prototype.slice.apply(arguments);
  return constructor.apply(obj, argsArray.slice(1)) || obj;
}

let woofy = newer(Person, 'woof');
woofy.talk();

// ----
function Dog() {}
Dog.prototype.breed = 'Bulldog';
new Dog();
let myDog = new Dog();
myDog.breed;
