//! NOTES
/*
Map
1. Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
2. Methods and properties are:
    new Map() – creates the map.
    map.set(key, value) – stores the value by the key.
    map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    map.has(key) – returns true if the key exists, false otherwise.
    map.delete(key) – removes the value by the key.
    map.clear() – removes everything from the map.
    map.size – returns the current element count.

Iteration over map
For looping over a map, there are 3 methods:
1. map.keys() – returns an iterable for keys,
2. map.values() – returns an iterable for values,
3. map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

Object.entries: Map from Object
1. When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:
2. If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) 
   that returns an array of key/value pairs for an object exactly in that format.

Object.fromEntries: Object from Map


*/
let recipeMap = new Map([['cucumber', 500], ['tomatoes', 350], ['onion', 50]]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}

// Besides that, Map has a built-in forEach method, similar to Array:
// runs the function for each (key, value) pair
recipeMap.forEach((value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 etc
});

// When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:
// array of [key, value] pairs
let map = new Map([['1', 'str1'], [1, 'num1'], [true, 'bool1']]);
console.log(map.get('1')); // str1

// Object.entries
let obj = {
  name: 'John',
  age: 30
};
let map = new Map(Object.entries(obj));
console.log(map.get('name')); // John
// Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ]. That’s what Map needs.
