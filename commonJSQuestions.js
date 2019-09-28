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
  const compare = function(string) {
    var obj = {};
    for (var i of string) {
      if (obj.hasOwnProperty(i)) {
        obj[i]++;
      } else {
        obj[i] = 1;
      }
    }
    return obj;
  };

  if (str1.length === str2.length) {
    var string1 = compare(str1);
    var string2 = compare(str2);
    for (var item in string1) {
      if (string1[item] !== string2[item]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
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

// VERSION 2 // recursion
function fib(num) {
  if (num < 2) {
    return num;
  }
  return fib(num - 1) + fib(num - 2);
}
fib(4);
