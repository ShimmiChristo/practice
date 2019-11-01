/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
*/
function largestPrimeFactor(number) {
  if (number <= 3) return number;
  for (var i = 2; i < number; i++) {
    let newNum = i;
    if (number % newNum == 0) return largestPrimeFactor(number / newNum);
  }
  return number;
}

largestPrimeFactor(2); //should return 2.
largestPrimeFactor(3); //should return 3.
largestPrimeFactor(5); //should return 5.
largestPrimeFactor(7); //should return 7.
largestPrimeFactor(13195); //should return 29.
largestPrimeFactor(600851475143); // should return 6857.
