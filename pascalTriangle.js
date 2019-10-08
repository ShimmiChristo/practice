//? Define a function that returns n lines of Pascal’s Triangle.
/*
  1. Pascal's triangle can be simulataed using 2-D array
  2. While creating 2-D array
  3. If the element is the either first or last element then initialize it with 1
  4. Else initialize it with the sum of the elements from previous row
*/
function pascal(rows) {}
pascal(2);

//? Define a function that takes an array of strings, and returns the most commonly occurring string that array (this question came with an execution time limit)
var arr = ['happy', 'sad', 'mad', 'happy', 'fantastic', 'great', 'happy'];
var objArr = [];
function strings(arr) {
  var obj = {};
  for (var i of arr) {
    if (obj[i]) {
      obj[i] += 1;
    } else {
      obj[i] = 1;
    }
  }
  objArr.push(obj);
  var max = objArr.reduce((prev, cur) => {
    console.log(prev);
    // return prev.value() > cur.value();
  });
  return max;
}
console.log(strings(arr));
