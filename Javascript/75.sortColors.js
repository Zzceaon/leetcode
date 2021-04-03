// 双指针
// 时间复杂度：O(n)，其中 n 是数组 nums 的长度。
// 空间复杂度：O(1)。
const sortColors = nums => {
  const n = nums.length;
  let p0 = 0, p1 = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] == 1) {
      [nums[i], nums[p1]] = [nums[p1], nums[i]];
      p1++;
    } else if (nums[i] == 0) {
      [nums[i], nums[p0]] = [nums[p0], nums[i]];
      if (p0 < p1) {
        [nums[i], nums[p1]] = [nums[p1], nums[i]];
      }
      p0++;
      p1++;
    }
  }
};