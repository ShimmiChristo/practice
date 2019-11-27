/* 
You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Input: 4
Output: 5
1. 1 step + 1 step + 1 step + 1 step
2. 1 step + 1 step + 2 step
3. 1 step + 2 step + 1 step
4. 2 step + 1 step + 1 step
5. 2 step + 2 step

Input: 5
Output: 8
1. 1 step + 1 step + 1 step + 1 step + 1 step
2. 1 step + 1 step + 1 step + 2 step
3. 1 step + 1 step + 2 step + 1 step
4. 1 step + 2 step + 1 step + 1 step
5. 2 step + 1 step + 1 step + 1 step
6. 2 step + 2 step + 1 step
7. 2 step + 1 step + 2 step
8. 1 step + 2 step + 2 step
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // *1 Brute Force // climbStairs(i,n)=(i+1,n)+climbStairs(i+2,n)
  // *2 Dynamic Programming
  // let cache = {};
  // let differentWays = function(n) {
  //   if (n in cache) {
  //     return cache[n];
  //   }
  //   if (n < 4) {
  //     cache[n] = n;
  //     return cache[n];
  //   }
  //   cache[n] = differentWays(n - 2) + differentWays(n - 1);
  //   return cache[n];
  // };
  // return differentWays(n);
  // *3 fibonacci method - not dynamic
  // if (n < 4) return n;
  // return climbStairs(n - 2) + climbStairs(n - 1);
  //*4 Memoization
  // let cache = {};
  // if (n in cache) {
  //   return cache[n];
  // } else if (n <= 2) {
  //   return n;
  // } else {
  //   return climbStairs(n - 2, cache) + climbStairs(n - 1, cache);
  // }
};

climbStairs(5); //7
climbStairs(4); //5
climbStairs(3); //3
