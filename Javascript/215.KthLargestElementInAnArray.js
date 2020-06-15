// 快速选择
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let partition = (nums, left, right, pivot_index) => {
      let pivot = nums[pivot_index];
      [nums[pivot_index], nums[right]] = [nums[right], nums[pivot_index]];
      let store_index = left;
      for (let i = left; i <= right; i++) {
          if (nums[i] < pivot) {
              [nums[store_index], nums[i]] = [nums[i], nums[store_index]];
              store_index++;
          }
      }
      [nums[store_index], nums[right]] = [nums[right], nums[store_index]];
      return store_index;
  }
  let select = (nums, left, right, k_smallest) => {
      if (left === right) return nums[left];
      let pivot_index = nums[Math.floor(Math.random() * (right - left + 1)) + left];
      pivot_index = partition(nums, left, right, k_smallest);
      if (pivot_index === k_smallest) return nums[k_smallest];
      else if (k_smallest < pivot_index) return select(nums, left, pivot_index - 1, k_smallest);
      return select(nums, pivot_index + 1, right, k_smallest);
  }
  return select(nums, 0, nums.length - 1, nums.length - k);
};