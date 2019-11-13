// Create class
function Bear(type, color) {
  this.type = type;
  this.color = color;
}

// create a method
/* 
  the method needs to be on the prototype 
  in order to be found by the instantiated objects
*/
Bear.prototype.growl = function() {
  console.log('The ' + this.type + ' says grrr');
};
Bear.prototype.getColor = function(color) {
  console.log(`The ${this.type} bear is ${this.color}`);
};

function Grizzly() {
  Bear.call(this, 'grizzly');
}
Grizzly.prototype = Object.create(Bear.prototype);
// Grizzly.prototype.growl = function () {
// console.log('on the grizzly prototype');
// }

let grizzly = new Grizzly();
// let grizzly = new Bear('grizzly');
let polar = new Bear('polar', 'white');

console.log(grizzly.growl());
console.log(grizzly);
console.log(polar.getColor());
