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
