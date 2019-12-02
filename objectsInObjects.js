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

// ----

var list = [
  { id: 'a', state: 'NJ', population: 150 },
  { id: 'a', state: 'NJ', population: 200 },
  { id: 'b', state: 'NY', population: 500 },
  { id: 'c', state: 'MI', population: 200 },
  { id: 'c', state: 'MI', population: 100 }
];

// 1. create new object
// 2. if has id, merge to correct id
// 3. make the state[val] the key,
// 4. add population to the total

// var obj = {
//   a: { state: 'NJ', population: 150 },
//   a: { state: 'NJ', population: 200 },
//   b: { state: 'NY', population: 500 },
//   c: { state: 'MI', population: 200 },
//   c: { state: 'MI', population: 100 }
// };

// var obj = {
//   a: { NJ: 2, population: 350 },
//   b: { NY: 1, population: 500 },
//   c: { MI: 2, population: 300 }
// };

var list = [
  { state: 'NJ', city: 'Newark', population: 150 },
  { state: 'NJ', city: 'Trenton', population: 200 },
  { state: 'NY', city: 'New York City', population: 500 },
  { state: 'MI', city: 'Detroit', population: 200 },
  { state: 'MI', city: 'Lansing', population: 100 }
];

// var obj = {
//   MI: { Count: 2, city: ['Detroit', 'Lansing'], population: 300 },
//   NJ: { Count: 2, city: ['Newark', 'Trenton'], population: 350 },
//   NY: { Count: 1, city: ['New York City'], population: 500 }
// };

// console.log(result);

function merge(list) {
  // var state = list.forEach((item, i) => {});
  var result = {};
  list.reduce((previousVal, currentVal, index) => {
    var obj = item;
    console.log(obj);
    for (var key in obj) {
      console.log(key);
      result[obj.id] = Object.assign({}, obj);
    }
  });
}
merge(list);

var list = [
  { state: 'NJ', city: 'Newark', population: 150 },
  { state: 'NJ', city: 'Trenton', population: 200 },
  { state: 'NY', city: 'New York City', population: 500 },
  { state: 'MI', city: 'Detroit', population: 200 },
  { state: 'MI', city: 'Lansing', population: 100 }
];

function mergeValues(list) {
  var obj = {};

  list.forEach(item => {
    obj[item.state] = Object.assign({}, item);
  });

  return obj;
}
console.log(mergeValues(list));

function transform(list) {
  return list.reduce((latestState, { state, city, population }) => {
    const needUpdate = state in latestState;
    latestState[state] = {
      count: needUpdate ? latestState[state].count + 1 : 1,
      city: needUpdate ? [...latestState[state].city, city] : [city],
      population: needUpdate
        ? latestState[state].population + population
        : population
    };
    return latestState;
  }, {});
}
// With reduce we loop over the list and every new loop we receive the latest state, 
// in this example we start with a empty object.
// Next, we check if entry needs a update (exists) or needs creation.
// Based on needUpdate we set count, city and population with a short if/else.
// If needUpdate is true, we just update otherwise we create with default values.

var list = [
  { state: 'NJ', city: 'Newark', population: 150 },
  { state: 'NJ', city: 'Trenton', population: 200 },
  { state: 'NY', city: 'New York City', population: 500 },
  { state: 'MI', city: 'Detroit', population: 200 },
  { state: 'MI', city: 'Lansing', population: 100 }
];

function mergeValues(list) {
  var reducer = list.reduce((previousVal, { state, city, population }) => {
    previousVal[state] = {
      count: state in previousVal ? previousVal[state].count + 1 : 1,
      city: state in previousVal ? [...previousVal[state].city, city] : [city],
      population:
        population in previousVal
          ? previousVal[state].population + population
          : population
    };
    return previousVal;
  }, {});
  return reducer;
}
console.log(mergeValues(list));

var calc = () => {
  var array1 = [1, 2, 3, 4];
  var accumulator = array1.reduce((total, num) => {
    var newTotal = total + num;
    return newTotal;
  });
  return accumulator;
};
console.log(calc());

var array1 = [1, 2, 3, 4];
var accumulator = array1.reduce((total, num) => {
  return total + num;
});

console.log(accumulator);

//  Object.entries()
// - returns an array of a give object's own enumerable string-keyed property [key, value] paris,
// in the same order as that provided by a for...in loop.
// The difference being that a for-in loop enumerates properties in the prototype chain as well.
var list = [
  { state: 'NJ', city: 'Newark', population: 150 },
  { state: 'NJ', city: 'Trenton', population: 200 },
  { state: 'NY', city: 'New York City', population: 500 },
  { state: 'MI', city: 'Detroit', population: 200 },
  { state: 'MI', city: 'Lansing', population: 100 }
];
//nj : {}

// The in operator returns true if the specified property is in the specified object or its prototype chain.
function mergeValues(list) {
  let obj = {};
  for (var elem of list) {
    if (!obj[elem.state]) {
      obj[elem.state] = {
        count: 1,
        city: [elem.city],
        population: elem.population
      };
    } else {
      obj[elem.state] = {
        count: obj[elem.state].count + 1,
        city: [...obj[elem.state].city, elem.city],
        population: obj[elem.state].population + elem.population
      };
    }
  }
  return obj;
}
console.log(mergeValues(list));

// return list.reduce((acc, { state, city, population }) => {
//   for (var i in acc) {
//     console.log(i);
//     if (i != state) {
//       state = {
//         count: 1,
//         city: city,
//         population: population
//       };
//     } else {
//       i[count] += 1;
//       (i[city] = [...city, city]), (i[population] += population);
//     }
//   }
//   }, obj);
// }
console.log(mergeValues(list));
// var obj = {
//   NJ: { count: 2, city: ['Newark, Trenton'], population: 350 }
// };

function mergeValues(list) {
  let obj = Object.fromEntries(
    list.map(({ state }) => [state, { count: 0, city: [], population: 0 }])
  );
  console.log(obj);
  list.forEach(({ state, city, population }) => {
    obj[state].count++;
    obj[state].city.push(city);
    obj[state].population += population;
  });
  return obj;
}
console.log(mergeValues(list));

//* Object.fromEntries() - transforms a list of key-value pairs into an object
//* Object.entries() - returns an array of a given object's own enumerable string-keyed property [key, value] pairs,
// in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
var list = [
  { state: 'NJ', city: 'Newark', population: 150 },
  { state: 'NJ', city: 'Trenton', population: 200 },
  { state: 'NY', city: 'New York City', population: 500 },
  { state: 'MI', city: 'Detroit', population: 200 },
  { state: 'MI', city: 'Lansing', population: 100 }
];

function mergeValues(list) {
  let obj = Object.fromEntries(
    list.map(({ state }) => [state, { count: 0, city: [], population: 0 }])
  );
  return obj;
}
console.log(mergeValues(list));

let object = {
  name: 'Chris',
  age: '20',
  states: ['NJ', 'MI']
};
let obj = Object.entries(object);

let fromEntries = Object.fromEntries(obj);
console.log(fromEntries);
