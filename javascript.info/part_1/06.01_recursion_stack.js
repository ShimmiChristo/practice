let company = {
  sales: [
    {
      name: 'John',
      salary: 1000
    },
    {
      name: 'Alice',
      salary: 600
    }
  ],

  development: {
    sites: [
      {
        name: 'Peter',
        salary: 2000
      },
      {
        name: 'Alex',
        salary: 1800
      }
    ],

    internals: [
      {
        name: 'Jack',
        salary: 1300
      }
    ]
  }
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else {
    // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

// console.log(sumSalaries(company)); // 6700

//! 1. Sum all numbers till the given one
/* 

Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

For instance:
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Make 3 solution variants:

Using a for loop.
Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
Using the arithmetic progression formula.
An example of the result:


P.S. Which solution variant is the fastest? The slowest? Why?
P.P.S. Can we use recursion to count sumTo(100000)?

*/

function sumTo(n) {
  // *1
  // let total = 0;
  // for (var i = 1; i <= n; i++) {
  //   total += i;
  // }
  // return total;
  // *2
  // if (n == 1) return 1;
  // return n + sumTo(n - 1);
  //* The solution using the formula: sumTo(n) = n*(n+1)/2:
  // *3
  // return (n * (n + 1)) / 2;
}
console.log(sumTo(10000)); // 5050

//! 2. Calfulate factorial
/* The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

We can write a definition of factorial like this:
n! = n * (n - 1) * (n - 2) * ...*1

Values of factorials for different n:
1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
The task is to write a function factorial(n) that calculates n! using recursive calls.

P.S. Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6 */

function factorial(n) {}

// console.log(factorial(5)); // 120

//! 3. Fibonacci numbers
/* The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

Write a function fib(n) that returns the n-th Fibonacci number. */

function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(7)); // 2
// console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757

// ! Create a list tree
let categories = [
  { id: 'animals', parent: null },
  { id: 'mammals', parent: 'animals' },
  { id: 'cats', parent: 'mammals' },
  { id: 'dogs', parent: 'mammals' },
  { id: 'chihuahua', parent: 'dogs' },
  { id: 'labrador', parent: 'dogs' },
  { id: 'persian', parent: 'cats' },
  { id: 'siamese', parent: 'cats' }
];

const listTree = (categories, parent) => {
  let node = {};
  categories
    .filter(c => c.parent === parent)
    .forEach(c => (node[c.id] = listTree(categories, c.id)));
  return node;
};

// console.log(JSON.stringify(listTree(categories, null), null, 2));

/* end goal destination

  animals: {
    mammals: {
      dogs: {
        chihuahua: null
        labrador: null
      }, 
      cats: {
        persian: null
        siamese: null
      }
    }
  }
} 
*/
