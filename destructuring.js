var a, b, res;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // [30, 40, 50];

//* Object destructing
var o = { p: 42, q: true };
var { p, q } = o;
console.log(o);
console.log(p);
console.log(q);

var { p: foo, q: bar };
console.log(foo);
console.log(bar);

//* default values
var {a=10, b=5} = {a: 3};
console.log(a); // 3
console.log(b); // 5

// assigning to new variables names and providing default values
var {a: aa = 10, b: bb = 5} = {a: 3};
console.log(aa); // 3
console.log(bb); // 5

//* unpacking fields from objects passed as function parameter
var user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John', 
    lastName: 'Doe'
  }
};
function userId({id}) {
  return id;
}
function whois({displayName, fullName: {firstName: first, lastName: last}}) {
  return `${displayName} is ${first} ${last}`;
}
console.log(userId(user)); // 42
console.log(whois(user)); // jdoe is John

//* Nested object and array destructuring
const metadata = {
  title: 'Scratchpad',
  translations: [
    {
      locale: 'de',
      localization_tags: [],
      last_edit: '2014-04-14T08:43:37',
      url: '/de/docs/Tools/Scratchpad',
      title: 'JavaScript-Umgebung'
    }
  ],
  url: '/en-US/docs/Tools/Scratchpad'
};

let {
  title: englishTitle, // rename
  translations: [
    {
       title: localeTitle, // rename
    },
  ],
} = metadata;
console.log(englishTitle); // Scratchpad
console.log(localeTitle); // JavaScript-Umgebung

//* For of iteration and destructuring 
var people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];
for (var {name: n, family: {father:f}} of people) {
  console.log(`Name: ${n}, Father: ${f}`);
}
// Name: Mike Smith, Father: Harry Smith
// Name: Tom Jones, Father: Richard Jones

//* Computed object property names and destructing
let key = 'z';
let {[key]: foo} = {z: 'bar'};
console.log(foo); // bar
console.log(key); // z
