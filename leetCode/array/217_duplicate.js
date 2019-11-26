/* 
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:
Input: [1,2,3,1]
Output: true

Example 2:
Input: [1,2,3,4]
Output: false

Example 3:
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  //*1 creating an object
  // const obj = {};
  // for (let i = 0; i < nums.length; i++) {
  //   if (!obj[nums[i]]) obj[nums[i]] = 1;
  //   else return true;
  // }
  // return false;
  //* 2. O(n2) time complexity (the worst you can have)
  // for (var i = 0; i < nums.length; i++) {
  //   for (var j = i; j < nums.length; j++) {
  //     if (i != j && nums[i] == nums[j]) {
  //       return true;
  //     }
  //   }
  // }
  // return false;

  //* 3. associative array or HashMap - O(n) time complexity
  let counts = [];
  for (var i = 0; i < nums.length; i++) {
    if (counts[nums[i]] == undefined) {
      counts[nums[i]] = 1;
      console.log(counts[nums[i]]);
    } else {
      return true;
    }
  }
  return false;
};
var arr = [1, 2, 3, 2, 2];
containsDuplicate(arr);
