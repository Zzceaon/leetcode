// 两次遍历 O(n) O(1)
var moveZeroes = function(nums) {
  if (!nums) return 0
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[j++] = nums[i]
    }
  }
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0
  }
};

// 一次遍历 O(n) O(1)
var moveZeroes = function(nums) {
  if (!nums) return 0
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      j++
    }
  }
};