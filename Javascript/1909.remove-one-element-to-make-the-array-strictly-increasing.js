/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
  let ans = 0, i = 0
  for (let j = 1; j < nums.length; j++) {
      if (nums[j] <= nums[i]) {
          ans++
      }
      if (i === 0 || nums[j] > nums[i] || nums[j] > nums[i - 1]) {
          i = j
      }
      if (ans > 1) {
          return false
      }
  }
  return true
};