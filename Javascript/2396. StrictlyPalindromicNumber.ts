// 我们可以遍历数组 nums，用哈希表 vis 记录数组中每两个相邻元素的和，如果当前两个元素的和已经在哈希表中出现过，则返回 true，否则将当前两个元素的和加入哈希表中。
// 遍历结束后，说明没有找到满足条件的两个子数组，返回 false。

function findSubarrays(nums: number[]): boolean {
  const vis:Set<number> = new Set<number>()
  for (let i = 1; i < nums.length; ++i) {
      const x = nums[i - 1] + nums[i]
      if (vis.has(x)) {
          return true
      } else {
          vis.add(x)
      }
  }
  return false
};

// 时间复杂度 O(n)，空间复杂度 O(n)。其中 n 为数组 nums 的长度。