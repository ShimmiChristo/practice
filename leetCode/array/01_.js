// https://www.teamblind.com/article/New-Year-Gift---Curated-List-of-Top-100-LeetCode-Questions-to-Save-Your-Time-OaM1orEU

/* 
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
var nums = [3,2,4], target = 6;
var twoSum = function(nums, target) {
  let obj = {};
  for (var i=0; i<nums.length; i++) {
    obj[nums[i]] = i;
  }
  
  for (var i=0; i<nums.length; i++) {
    var diff = target-nums[i];
    if(obj.hasOwnProperty(diff) && obj[diff] !== i)
        return [i, obj[diff]]
  }
};
twoSum(nums, target);
