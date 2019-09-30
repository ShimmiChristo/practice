var list = [
  { id: 1, state: 'NJ', city: 'Jersey City', population: 150 },
  { id: 1, state: 'NJ', city: 'Hoboken', population: 200 },
  { id: 2, state: 'NY', city: 'Manhattan', population: 500 },
  { id: 3, state: 'MI', city: 'Detroit', population: 200 },
  { id: 3, state: 'MI', city: 'Grand Rapids', population: 100 }
];
// function compound(list) {
function helper(obects) {
  var obj = {};
  for (var i = 0; i < obects.length; i++) {
    console.log(list[i]);
    if (!obj[list[i].id]) {
      obj[list[i].id] = {};
    }
  }
  return obj;
}

console.log(helper(list));
// }

// output
// var obj = {
//     1: { NJ: 2, population: 350 },
//     2: { NY: 1, population: 500 },
//     3: { MI: 2, population: 300 }
// }
