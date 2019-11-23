var list = [
  { id: 'a', state: 'NJ', population: 150 },
  { id: 'a', state: 'NJ', population: 200 },
  { id: 'b', state: 'NY', population: 500 },
  { id: 'c', state: 'MI', population: 200 },
  { id: 'c', state: 'MI', population: 100 }
];

const reduceObj = list.reduce((acc, item) => {
  if (item.id in acc) {
    acc[item.id] = {
      state: item.state,
      population: acc[item.id].population + item.population
    };
  } else {
    acc[item.id] = {
      state: item.state,
      population: item.population
    };
  }
  return acc;
}, {});

// console.log(reduceObj);

// --------------------------------------------

//! INPUT
var list2 = [
  { state: 'NJ', city: 'Newark', population: 150 },
  { state: 'NJ', city: 'Trenton', population: 200 },
  { state: 'NY', city: 'New York City', population: 500 },
  { state: 'MI', city: 'Detroit', population: 200 },
  { state: 'MI', city: 'Lansing', population: 100 }
];

//! DESIRED OUTPUT
var obj2 = {
  MI: { count: 2, city: ['Detroit', 'Lansing'], population: 300 },
  NJ: { count: 2, city: ['Newark', 'Trenton'], population: 350 },
  NY: { count: 1, city: ['New York City'], population: 500 }
};

const reduceList = list2.reduce((acc, item) => {
  if (item.state in acc) {
    acc[item.state] = {
      count: (acc[item.state].count += 1),
      city: [...acc[item.state].city, item.city],
      population: acc[item.state].population + item.population
    };
  } else {
    acc[item.state] = {
      count: 1,
      city: [item.city],
      population: item.population
    };
  }
  return acc;
}, {});

console.log(reduceList);
