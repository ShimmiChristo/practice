function removeDup(arr) {
  var obj = {};
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]] != true) {
      newArr.push(arr[i]);
      obj[arr[i]] = true;
    }
  }
  return newArr;
}
var arr = [1, 3, 3, 4, 5, 6, 7, 7, 7, 9];
console.log(arr);
console.log(removeDup(arr));
