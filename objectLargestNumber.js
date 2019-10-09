//? Return the largest number

var arr = [{ num: 0.5 }, { num: 1 }, { num: 1.35 }];

var maxObj = arr.reduce((max, obj) => {
  return obj.num > max.num ? obj : max;
});

console.log(maxObj);
