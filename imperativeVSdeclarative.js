// IMPERATIVE VS DECLARATIVE
// Imperative Code // improved readability
const arrayContainsOtherArray = (needle, haystack) => {
  for (let i = 0; i < needle.length; i++) {
    if (haystack.indexOf(needle[i]) === -1) return false;
  }
  return true;
};
// Declarative Code // less code, a single expression is returned so it's obvious what the function is trying to do
const arryContainsOtherArray = (needle = [], haystack = []) =>
  needle.every(el => haystack.includes(el));

const foodArray = [
  { name: 'Burrito' },
  { name: 'Pizza' },
  { name: 'Burger' },
  { name: 'Pasta' }
];

for (let i = 0; i < foodArray.length; i++) {
  console.log(`i value: ${i} | Food Name:`, foodArray[i].name);
}

foodArray.forEach((element, i) => {
  console.log(`i value: ${i} | Food Name:`, element.name);
});
