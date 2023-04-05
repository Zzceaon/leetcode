// 贪心

// 记数组 arr 的长度为 n，对于 0≤i<j<n，如果交换 arr[i] 和 arr[j] 后得到的新数组按字典序排列比原数组小，显然有 arr[i]>arr[j] 成立。因此符合题意要求的交换会使得数组 arr 在下标 i 处的元素变小。那么为了得到按字典序排列小于原数组的最大新数组，尽可能地保持前面的元素不变是最优的，即让 i 最大化。

// 如何最大化 i
// 我们可以从大到小枚举 i∈[0,n−2]，然后枚举 j∈[i+1,n)，如果存在 j 使 arr[i]>arr[j] 成立，那么说明当前枚举的 i 是最大化的。这里只需要判断 arr[i]>arr[i+1] 是否成立即可，因为后面的元素是符合非递减的，即 arr[i+1] 是 arr[i] 后面的最小元素
// 当我们枚举 i 时，显然不存在 k>i，使得 arr[k]>arr[k+1] 成立，因此 arr[i] 后面的元素是符合非递减的。

// i 最大化后，j∈[i+1,n) 应该怎么选择
// 显然在满足 arr[j]<arr[i] 的条件下，取最大的 arr[j] 是最优的。但是题目并没有元素不重复的要求，最大的 arr[j] 可能有重复值，那么选择其中下标最小的 arr[j] 是最优的。
// 由前面推导可知，区间 [i+1,n) 的元素是非递减的，因此我们从大到小枚举 j，直到 arr[j]<arr[i] 且 arr[j]≠arr[j−1]成立，那么得到的 j 就是符合要求的。交换 arr[i] 和 arr[j]。

function prevPermOpt1(arr: number[]): number[] {
  const n = arr.length
  for (let i = n - 2; i >= 0; i--) {
      if (arr[i] > arr[i + 1]) {
          let j = n - 1
          while (arr[j] >= arr[i] || arr[j] === arr[j - 1]) {
              j--
          }
          [arr[i], arr[j]] = [arr[j], arr[i]]
          break
      }
  }
  return arr
};

// 时间复杂度：O(n)，其中 n 是数组 arr 的长度。查找 i 需要 O(n) 的时间复杂度，查找 j 需要 O(n) 的时间复杂度。
// 空间复杂度：O(1)。返回值不计入空间复杂度。