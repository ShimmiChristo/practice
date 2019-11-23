/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
*/
/* 
  - need to increment to "n"
  - add to total 
  - the number will always be divisible by (n * n -1)
  - need to check if each increment modulus equals zero 
  - divide by each number, return true, else add 1
*/
function smallestMult(n) {
  var total = n * (n - 1);
  // console.log(total);
  // var total = i * (i - 1);
  for (var i = n; i > 0; i--) {
    // console.log(total);
    if (total % i !== 0) {
      total += total;
    }
  }
}

smallestMult(5); // 60.
smallestMult(20); // 232792560
