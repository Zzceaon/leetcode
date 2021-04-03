// 时间复杂度： O(\log n)O(logn) ，其中 nn 为数组的长度。二分查找的时间复杂度为 O(\log n)O(logn)，一共会执行两次，因此总时间复杂度为 O(\log n)O(logn)。
// 空间复杂度：O(1)O(1) 。只需要常数空间存放若干变量。
const binarySearch = (nums, target, lower) => {
  let left = 0, right = nums.length - 1, ans = nums.length;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}
const searchRange = (nums, target) => {
  let ans = [-1, -1];
  const leftIdx = binarySearch(nums, target, true);
  const rightIdx = binarySearch(nums, target, false) - 1;
  if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] == target && nums[rightIdx] == target) {
    ans = [leftIdx, rightIdx];
  }
  return ans;
};