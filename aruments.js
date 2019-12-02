/*  the arguments object of a function is also an array-like object and as such can be converted into an array in the same fashion. */
/* You can also use this with the 'arguments' object of a function as this is also an array-like
   object and not a true array
*/
function showArgs() {
  console.log(arguments);
  console.log(arguments instanceof Array);
}
showArgs('stuff', 'things', 10, []);
/* Cherry-pick Array's prototype's .slice() method and use .apply() to turn 'arguments' into a real
    array for easy manipulation
 */
function showArgs() {
  console.log('arguments', arguments);
  var args = Array.prototype.slice.apply(arguments);
  args.forEach(function(arg) {
    console.log(arg);
  });
  console.log(args instanceof Array);
}
showArgs('stuff', 'things', 10, ['arg 1', 2, 'arg 3', ['args']]);
