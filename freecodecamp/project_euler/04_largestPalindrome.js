/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

function main(n) {
  const pals = [];
  const maxPalindrome = n => {
    if (
      n.toString() ===
      n
        .toString()
        .split('')
        .reverse()
        .join('')
    ) {
      pals.push(n);
    }
  };
  const min = parseInt('1' + '0'.repeat(n - 1));
  const max = parseInt('9' + '9'.repeat(n - 1));
  for (var i = min; i <= max; i++) {
    for (var j = min; j <= max; j++) {
      maxPalindrome(j * i);
    }
  }
  return Math.max(...pals);
}

main(2); // 9009
main(3); // 906609
