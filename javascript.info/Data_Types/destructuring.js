//* Array destructuing
let arr = ['Ilya', 'Kantor'];
// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;
console.log(firstName); // Ilya
console.log(surname); // Kantor

// Works with any iterable on the right-side
let [a, b, c] = 'abc'; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
console.log(one);
console.log(two);

// Assign to anything at the left-side
let user = {};
[user.name, user.surname] = 'Ilya Kantor'.split(' ');

console.log(user.name); // Ilya
console.log(user);

// Looping with .entries()
let user = {
  name: 'john',
  age: 30
};
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
console.log(Object.entries(user));

//* Destructuring Assignment
let user = {
  name: 'John',
  years: 30
};
let { name, years: age, isAdmin = false } = user;
console.log(name);
console.log(age);
console.log(isAdmin);

//* The maximal salary
let salaries = {
  Pete: 300,
  Mary: 250,
  John: 100,
  Chris: 300
};
function topSalary(salaries) {
  var topPaid;
  var currentPay = 0;
  for (let [person, pay] of Object.entries(salaries)) {
    if (pay > currentPay) {
      currentPay = pay;
      topPaid = person;
    }
  }
  return topPaid || null;
}
topSalary(salaries);

// Version 2
function topSalary(salaries) {
  let max = 0;
  let maxName = null;
  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }
  return maxName;
}
topSalary(salaries);
