// 哈希集合

// 首先遍历数组 nums，将数组中的每个元素加入哈希集合，然后依次检查从 0 到 n 的每个整数是否在哈希集合中，不在哈希集合中的数字即为消失的数字。由于哈希集合的每次添加元素和查找元素的时间复杂度都是 O(1)，因此总时间复杂度是 O(n)

function missingNumber(nums: number[]): number {
  const set = new Set();
  const n: number = nums.length;
  for (let i = 0; i < n; i++) {
      set.add(nums[i]);
  }
  let missing: number = -1;
  for (let i = 0; i <= n; i++) {
      if (!set.has(i)) {
          missing = i;
          break;
      }
  }
  return missing;
};

// 时间复杂度：O(n)，其中 n 是数组 nums 的长度。遍历数组 nums 将元素加入哈希集合的时间复杂度是 O(n)，遍历从 0 到 n 的每个整数并判断是否在哈希集合中的时间复杂度也是 O(n)。

// 空间复杂度：O(n)，其中 n 是数组 nums 的长度。哈希集合中需要存储 n 个整数。