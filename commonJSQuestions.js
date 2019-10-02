/*
Index

1. Palindrome
2. FizzBuzz
3. Anagram
4. Find the vowels
5. Fibonacci
6. Letter Frequency

*/

// 1. Palindrome
// version 1
function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  var checker = str
    .toLowerCase()
    .replace(re, '')
    .split('')
    .reverse()
    .join('');
  return checker === str;
}
palindrome('rac ecar');

// version 2
function palindromeV2(str) {
  var re = /[^A-Za-z0-9]/g;
  var checker = str.toLowerCase().replace(re, '');
  var len = checker.length;
  for (var i = 0; i < len / 2; i++) {
    if (checker[i] !== checker[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
palindromeV2('A man, a plan, a canal. Panama'); // true
palindromeV2('race car'); // true

// 2. FizzBuzz
const fizzbuzz = function(num) {
  for (var i = 0; i <= num; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};
fizzbuzz(30);

// 3. ANAGRAM
//  VERSION 1
function anagram(str1, str2) {
  var string1 = str1
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  var string2 = str2
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  return string1 === string2;
}
anagram('car', 'raac');

//VERSION 2
function anagramV2(str1, str2) {
  function charMap(text) {
    var obj = {};
    for (var i = 0; i < text.length; i++) {
      if (obj[text[i]]) {
        obj[text[i]]++;
      } else {
        obj[text[i]] = 1;
      }
    }
    // console.log(obj);
    return obj;
  }

  if (str1.length === str2.length) {
    let string1 = charMap(str1);
    let string2 = charMap(str2);
    console.log(string1);
    console.log(string2);
    for (var e in string1) {
      if (string1[e] !== string2[e]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
console.log(anagramV2('rac', 'car'));
anagramV2('rac', 'cfr');

// #4. Find the vowels
//VERSION 1
// return all vowels
function vowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var arr = [];
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      arr.push(string[i]);
    }
  }
  return arr;
}
console.log(vowels('helloooo'));

//VERSION 2
// return the number of vowels
function vowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }
  return count;
}
console.log(vowels('hello'));

//VERSION 3
// for of loop
const vowelsNum = str => {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for (var i of str.toLowerCase()) {
    if (vowels.includes(i)) {
      count++;
    }
  }
  return count;
};
console.log(vowelsNum('hello'));

// #5 Fibonacci - 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// VERSION 1
function fib(num) {
  var nums = [0, 1];
  for (var i = 2; i <= num; i++) {
    nums.push(nums[i - 1] + nums[i - 2]);
  }
  console.log(nums);
}
fib(9);

function fib(num) {
  var arr = [0, 1];
  for (var i = 2; i <= num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}
console.log(fib(9));

// VERSION 2 // recursion
function fib(num) {
  if (num < 2) {
    return num;
  }
  return fib(num - 1) + fib(num - 2);
}
fib(4);

//6. Letter Frequency
// display the letter frequency
function letterFreq(string) {
  let str = string.toLowerCase();
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] = obj[str[i]] + 1;
    } else {
      obj[str[i]] = 1;
    }
    // ternary
    // obj[str[i]] = obj[str[i]] ? ++obj[str[i]] : 1;
  }
  return obj;
  // console.log(Math.max(...Object.values(obj)));
}
// letterFreq('apple');
console.log(letterFreq('apple'));

function letterFreq(str) {
  let re = /[^A-Za-z0-9]/g;
  let string = str.toLowerCase().replace(re, '');
  const obj = {};

  // for (var i = 0; i < string.length; i++) {
  //   if (obj[string[i]]) {
  //     obj[string[i]]++;
  //   } else {
  //     obj[string[i]] = 1;
  //   }
  // }
  for (var char of 'string') {
    console.log(char);
  }
  return obj;
}
letterFreq('apple');

function anagram(str1, str2) {
  function charMap(word) {
    var obj = {};
    for (var i = 0; i < word.length; i++) {
      if (obj[word[i]]) {
        obj[word[i]]++;
      } else {
        obj[word[i]] = 1;
      }
    }
    return obj;
  }

  if (str1.length === str2.length) {
    var string1 = charMap(str1);
    var string2 = charMap(str2);
    for (var i in string1) {
      if (string1[i] !== string2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
anagram('happy', 'pahpy');

// 7. Capitalize the first letter of each word in a sentence
function cap(sent) {
  var strSplit = sent.toLowerCase().split(' ');
  for (var i = 0; i < strSplit.length; i++) {
    // strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1);
    strSplit[i] = strSplit[i].replace(
      strSplit[i][0],
      strSplit[i][0].toUpperCase()
    );
  }
  return strSplit.join(' ');
}
console.log(cap('the brown fox jumped over the dog'));
// VERSION 2
let cap = str => {
  var split = str.split(' ');
  split.forEach((item, index) => {
    split[index] = item.replace(item[0], item[0].toUpperCase());
  });
  return split.join(' ');
};
console.log(cap('the brown fox jumped over the dog'));

function cap(sent) {
  var strSplit = sent.toLowerCase().split(' ');
  strSplit.forEach((e, i) => {
    strSplit[i] = e.replace(e[0], e[0].toUpperCase());
  });
  return strSplit.join(' ');
}
console.log(cap('the brown fox jumped over the dog'));

// 8. REPEATIFY
String.prototype.repeatify = function(times) {
  var str = '';
  for (var i = 0; i < times; i++) {
    str += this;
  }
  return str;
};

console.log('hello'.repeatify(3));

// 9. 'this' .cal()
var fullname = 'John Doe';
var obj = {
  fullname: 'Colin Ihrig',
  prop: {
    fullname: 'Aurelio De Rosa',
    getFullname: function() {
      return this.fullname;
    }
  }
};

console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test.call(this, obj.prop));

function bye(message1, message2) {
  console.log(message1 + ' ' + this.name + ' ' + message2);
}
var par = { name: 'John' };
var arr = ['Bye', 'Never come again...'];
var byebye = 'Bye';
var never = 'Never come again';
// .call()
bye.call(par, byebye, never); // call doesn't work with an array
// .apply()
bye.apply(par, arr);

// .bind()
var fn1 = bye.bind(par, byebye, never);
console.log(fn1());

// 10. Write a function that will allow to you to do this
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

function createBase(num) {
  return function(add) {
    console.log(num + add);
  };
}
