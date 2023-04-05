// 由于给定的数组 nums 是严格递增的，因此数组中不存在重复元素，不存在两个相同的算术三元组。

// 对于数组 nums 中的元素 x，如果 x+diff 和 x+2×diff 都在数组中，则存在一个算术三元组，其中的三个元素分别是 x、x+diff 和 x+2×diff，因此问题转换成计算数组 nums 中有多少个元素可以作为算术三元组的最小元素。

// 为了快速判断一个元素是否在数组中，可以使用哈希集合存储数组中的所有元素，然后判断元素是否在哈希集合中。

// 将数组中的所有元素都加入哈希集合之后，遍历数组并统计满足 x+diff 和 x+2×diff 都在哈希集合中的元素 x 的个数，即为算术三元组的数目。

var arithmeticTriplets = function(nums, diff) {
  const set = new Set()
  for (let x of nums) {
      set.add(x)
  }
  let ans = 0
  for (let x of nums) {
      if (set.has(x + diff) && set.has(x + 2 * diff)) {
          ans++
      }
  }
  return ans
};

// 时间复杂度：O(n)，其中 n 是数组 nums 的长度。需要遍历数组两次，每次将元素加入哈希集合与判断元素是否在哈希集合中的时间都是 O(1)。

// 空间复杂度：O(n)，其中 n 是数组 nums 的长度。哈希集合需要 O(n) 的空间。