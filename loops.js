// FOR OF LOOP
// iterates through each element in an array
var arr = [3, 5, 7];
arr.hello = 'hello';

for (var i of arr) {
  console.log(i);
}

// FOR IN LOOP
// iterates through each element in an object (arrays are objects)
for (var i in arr) {
  console.log(arr);
}
// output
// var obj = {
//   1: 3,
//   2: 5,
//   3: 7,
//   hello: 'hello'
// };
