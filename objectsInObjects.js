var list = [
  { id: 'a', state: 'NJ', population: 150 },
  { id: 'a', state: 'NJ', population: 200 },
  { id: 'b', state: 'NY', population: 500 },
  { id: 'c', state: 'MI', population: 200 },
  { id: 'c', state: 'MI', population: 100 }
];
// function compound(list) {
function helper(obects) {
  // for (var i = 0; i < obects.length; i++) {
  //   console.log(list[i]);
  //   if (!obj[list[i].id]) {
  //     obj[list[i].id] = Object.assign({}, list[i]);
  //   }
  // }
  var obj = {};
  list.forEach((element, index) => {
    obj[element.id] = Object.assign({}, Object.keys(obj));
    // list[element].state = list[element.state] + element.state
  });
  return obj;
}
// list.forEach((element, index) => {
//   obj[element] = obj[population];
// });

console.log(helper(list));
// }

// output
// var obj = {
//     1: { NJ: 2, population: 350 },
//     2: { NY: 1, population: 500 },
//     3: { MI: 2, population: 300 }
// }

// Object.assign
// - method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget);

var data3 = {
  menus: [
    {
      recipe: 'chicken with rice',
      ingredients: [
        { name: 'tomato', value: 2 },
        { name: 'chicken', value: 3 },
        { name: 'rice', value: 1 }
      ]
    },
    {
      recipe: 'Garden rice',
      ingredients: [
        { name: 'tomato', value: 3 },
        { name: 'chicken', value: 2 },
        { name: 'peas', value: 1 }
      ]
    }
  ]
};
var ingredients = {};

data3.menus.forEach(a => {
  a.ingredients.forEach(b => {
    ingredients[b.name] = (ingredients[b.name] || 0) + b.value;
  });
});

console.log(ingredients);

// {
//   "tomato": 5,
//   "chicken": 5,
//   "rice": 1,
//   "peas": 1
// }
