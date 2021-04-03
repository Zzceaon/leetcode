// 时间复杂度： O(log n)，其中 n 为 nums 数组的大小。整个算法时间复杂度即为二分查找的时间复杂度 O(log n)。
// 空间复杂度： O(1) 。我们只需要常数级别的空间存放变量。
const search = (nums, target) => {
  let n = nums.length;
  if (n == 0) {
    return -1;
  }
  if (n == 1) {
    return nums[0] == target ? 0 : -1;
  }
  let l = 0, r = n - 1;
  while (l <= r) {
    let mid = Math.floor((r + l) / 2);
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[n - 1]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
};