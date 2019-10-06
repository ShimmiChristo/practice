//* Object.entries
//* Object.fromEntries
// you can use Object.entries to get an array of key/value pairs from an object,
// then you can use map()
// then use Object.fromEntries(object) to turn it back into an object

//1. Double the price of the object
let prices = {
  banana: 1,
  orange: 2,
  meat: 4
};
let doublePrice = Object.fromEntries(
  Object.entries(prices).map(([prop, value]) => {
    return [prop, value * 2];
  })
);
console.log(doublePrice.orange);

var newObject = Object.entries(prices).map(([properties, value], index) => {
  console.log('properties ' + properties);
  console.log('value ' + value);
});
console.log(newObject);

// 2. Sum the properties
/*
  There is a salaries object with arbitrary number of salaries. 
  Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values 
  and the for/of loop. 
  If salaries is empty, then the result must be 0. 
*/
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};
// 650
// for...of loop
function sumSalaries(salaries) {
  let sum = Object.values(salaries);
  let total = 0;
  for (price of sum) {
    total += price;
  }
  return total;
}
console.log(sumSalaries(salaries));

//reduce
function sumSalaries(salaries) {
  let sum = Object.values(salaries).reduce((total, amount) => {
    return total + amount;
  });
  return sum;
}
console.log(sumSalaries(salaries));
//reduce V2
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0);
}
console.log(sumSalaries(salaries));
// map
function sumSalaries(salaries) {
  let total = 0;
  Object.values(salaries).map(amount => {
    total += amount;
  });
  return total;
}
console.log(sumSalaries(salaries));

// 3. Count propeties
/*
  Write a function count(obj) that returns the number of properties in the object. 
*/
let user = {
  name: 'John',
  age: 30
};
// 2
function count(obj) {
  return Object.values(user).length;
}
console.log(count(user));
