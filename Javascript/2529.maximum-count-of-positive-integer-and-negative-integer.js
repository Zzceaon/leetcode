/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
  const binarySearch = (num, target) => {
      let left = 0, right = nums.length - 1
      while (left <= right) {
          let mid = (left + right) >> 1
          if (nums[mid] < target) {
              left += 1
          } else {
              right -= 1
          }
      }
      return left
  }
  return Math.max(binarySearch(nums, 0), nums.length - binarySearch(nums, 1))
};