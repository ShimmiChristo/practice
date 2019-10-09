//? Define a function that takes an array of strings, and returns the most commonly occurring string that array (this question came with an execution time limit)
var arr = ['happy', 'sad', 'mad', 'happy', 'fantastic', 'great', 'happy'];

function strings(arr) {
  var obj = {};
  var max;
  var commonWord;
  for (var word of arr) {
    if (!obj[word]) {
      obj[word] = 1;
      max = obj[word];
    } else {
      obj[word] += 1;
      if (obj[word] > max) {
        max = obj[word];
        commonWord = word;
      }
    }
  }
  return `${commonWord} : ${max}`;
}
console.log(strings(arr));

// ----

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
    if (cur.value > prev.value) {
    }
    console.log(prev);
    console.log(cur);
    // return prev.value() > cur.value();
  });
  return max;

  // var max = 0;
  // var commonWord;
  // for (var word in obj) {
  //   if (obj[word] > max) {
  //     max = obj[word];
  //     commonWord = word;
  //   }
  // }
  // return commonWord;

  // return max; // returns obj
  // return Math.max(...Object.values(obj)); // returns 3
  //
}
console.log(strings(arr));
