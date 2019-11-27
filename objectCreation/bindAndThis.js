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

// more examples of this and bind
function talk(sound) {
  console.log(this.sound);
}
talk('woof');
