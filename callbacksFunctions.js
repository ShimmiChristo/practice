/*
A callback function is a function that is passed as an argument, to be called back at a later time. 
A function that accepts other functions as arguments is called a HIGHER-ORDER FUNCTION, which
contains the logic for when the callback function gets executed. 

*/
function createQuote(quote, callback) {
  var myQuote = 'Like I always say, ' + quote;
  callback(myQuote);
}
function logQuote(quote) {
  console.log(quote);
}
createQuote('eat your vegatables', logQuote);

createQuote('eat your vegables', function(quote) {
  console.log(quote);
});

function greeting(name) {
  console.log('Hello ' + name);
}
function processUserInput(callback) {
  var name = promt('Please enter your name');
  callback(name);
}
processUserInput(greeting);
//
function doHomework(subject) {
  console.log(`Starting my ${subject} homework`);
}
doHomework('math');

function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework`);
  callback();
}
doHomework('math', function() {
  console.log('finished my work');
});

function greeting(name) {
  console.log(`hi ${fname} ${lname}`);
}
function intro(first, last, callback) {
  callback();
}

// Callback Function
function intro(first, last, callback) {
  console.log(`my name is ${first} ${last}`);
  const fullName = `${first} ${last}`;
  callback(fullName);
}
function greeting(sayHi) {
  console.log(`Hi ${sayHi}`);
}
intro('Chris', 'Shimmi', greeting);

//! PROMISES
// https://scotch.io/courses/10-need-to-know-javascript-concepts/callbacks-promises-and-async
/*
Have 3 states
1. Pending - this is the initial state of the Promise before an operation begins
2. Fulfilled - the means the specified operation was completed
3. Rejected - the operation did not complete; an error value is usually thrown. 
*/
// Creating a Promise - the Promise object is created with the new keyword
const weather = false;
const date = new Promise(function(resolve, reject) {
  if (weather) {
    const dateDetails = {
      name: 'Cubana Resturant',
      location: '55th street',
      table: 5
    };
    resolve(dateDetails);
  } else {
    reject(new Error('bad weather'));
  }
});

date
  .then(function(dateDetails) {
    console.log(dateDetails);
    console.log(dateDetails.name);
  })
  .catch(error => {
    console.log(`this is the error ${error}`);
  });
