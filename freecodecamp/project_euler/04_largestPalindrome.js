/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

function largestPalindromeProduct(n) {
  const maxPalindrome = function() {};
  for (var i = 0; i <= 9; i++) {
    console.log(i.toString().repeat(n));
    // console.log(leng);
  }
}

largestPalindromeProduct(2); // 9009
largestPalindromeProduct(3); // 906609
