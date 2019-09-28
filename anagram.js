// Version 1
// direct comparison
function anagram(str1, str2) {
  const re = /[^a-z0-9]/g;
  const string1 = str1
    .toLowerCase()
    .replace(re, '')
    .split('')
    .sort()
    .join('');
  const string2 = str2
    .toLowerCase()
    .replace(re, '')
    .split('')
    .sort()
    .join('');
  return string1 === string2;
}
anagram('happy', 'paphy');

// Version 2
function anagram(str1, str2) {
  // character map
  function createCharMap(text) {
    let charMap = {};
    for (let char of text) {
      if (charMap.hasOwnProperty(char)) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
    return charMap;
  }

  if (str1.length === str2.length) {
    let stringAMap = createCharMap(str1);
    let stringBMap = createCharMap(str2);
    for (char in stringAMap) {
      if (stringAMap[char] !== stringBMap[char]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
anagram('happy', 'ppyha');

function anagram2(str1, str2) {
  function createCharMap(text) {
    let charMap = {};
    for (let char of text) {
      if (charMap.hasOwnProperty(char)) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
    return charMap;
  }

  let stringAMap = createCharMap(str1);
  let stringBMap = createCharMap(str2);
  for (char in stringAMap) {
    if (stringAMap[char] !== stringBMap[char]) {
      return false;
    }
  }
  return true;
}
anagram2('happy', 'paphy');

//VERSION 3

function group_anagrams(arr) {
  let sortedArr = arr.map(item =>
    item
      .split('')
      .sort()
      .join('')
  );
  let setArr = new Set(sortedArr);
  let reducedObj = {};
  for (let setItem of setArr) {
    let indexArr = sortedArr.reduce((acc, cur, index) => {
      if (setItem === cur) {
        acc.push(index);
      }
      return acc;
    }, []);
    reducedObj[setItem] = indexArr;
  }
  let finalArr = [];
  for (let reduceItem in reducedObj) {
    finalArr.push(reducedObj[reduceItem].map(item => arr[item]));
  }
  return finalArr;
}
group_anagrams(['car', 'cra', 'rca', 'cheese', 'ab', 'ba']);
