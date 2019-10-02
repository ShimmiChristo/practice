var list = [
  { id: 'a', state: 'NJ', population: 150 },
  { id: 'a', state: 'NJ', population: 200 },
  { id: 'b', state: 'NY', population: 500 },
  { id: 'c', state: 'MI', population: 200 },
  { id: 'c', state: 'MI', population: 100 }
];
// var foo = { id: 'a', state: 'NJ', population: 150 };
// var bar = Object.keys(foo).reduce(
//   (obj, key) => Object.assign({}, obj, { [foo[key]]: key }),
//   {}
// );
// console.log(bar);

var obj = {};
var bar = list.reduce((accumulator, currentVal, currentIndex) => {
  // obj[i.id] = Object.assign({}, total, { [list[i].state] :  });
  // obj[currentVal].id = Object.assign({}, obj, );
  Object.keys(currentVal).forEach(key => {
    accumulator[key] = (accumulator[key] || 0) + currentVal[key];
  });
  return accumulator;
}, {});

console.log(bar);

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

// Object.assign(target, ... values)
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
        { name: 'rice', value: 0 }
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

// .reduce(acc, val, i)
var list = [
  { id: 'a', population: 150 },
  { id: 'a', population: 200 },
  { id: 'b', population: 500 },
  { id: 'c', population: 200 },
  { id: 'c', population: 100 }
];

// forEach
var obj = {};
list.forEach(val => {
  var newObj = {};
  if (!obj[val.id]) {
    obj[val.id] = Object.assign({});
    // obj[val.id] = newObj[((val.id = 1), val.population)];
  } else {
    obj[val.id] = obj[val.id] + val.population;
  }
  // console.log(obj)
});
console.log(obj);

// reduce
var res = list.reduce((total, val) => {
  if (!total[val.id]) {
    total[val.id] = val.population;
  } else {
    total[val.id] = total[val.id] + val.population;
  }
  return total;
}, {});
console.log(res);
