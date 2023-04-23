// 双指针
// 将两个数组看作队列，每次从两个数组头部取出比较小的数字放到结果中

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = 0, p2 = 0, cur = 0
  const sorted = new Array(m + n).fill(0)
  while (p1 < m || p2 < n) {
      if (p1 === m) {
          cur = nums2[p2++]
      } else if (p2 === n) {
          cur = nums1[p1++]
      } else if (nums1[p1] < nums2[p2]) {
          cur = nums1[p1++]
      } else {
          cur = nums2[p2++]
      }
      sorted[p1 + p2 - 1] = cur
  }
  for (let i = 0; i < m + n; i++) {
      nums1[i] = sorted[i]
  }
};

// 时间复杂度：O(m+n)。 指针移动单调递增，最多移动 m+n 次，因此时间复杂度为 O(m+n)。
// 空间复杂度：O(m+n)。 需要建立长度为 m+n 的中间数组 sorted。