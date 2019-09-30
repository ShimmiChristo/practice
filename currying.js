// Currying and Partial Application

//Currying
// - works for functions with two or more arguments
// used to require less arguments
function div(x, y) {
  return x / y;
}
div(6, 2); // 3
// OR
function div(x) {
  return y => {
    return x / y;
  };
}
div(6)(3); // 2

// Partial Application
function volume(l) {
  return (w, h) => {
    return l * w * h;
  };
}
const hCy = volume(70);
hCy(203, 142);
hCy(220, 122);
hCy(120, 123);
// OR
volume(70)(90, 30);
volume(70)(220, 122);
volume(70)(120, 123);

var count = 0;
function makeAdder(x) {
  return function inner(y) {
    return x + y;
  };
}
var add5 = makeAdder(5);
count = count + add5(2);
// OR
count += makeAdder(5)(2);
