// 排序
// 创建一个索引数组 indices，其中 indices[i]=i。排序完成后，对于所有的 i,j (i<j) 都有 [indices[i]]>heights[indices[j]]。然后我们遍历 i 从 0 到 n−1，将 names[indices[i]] 追加到答案数组中

function sortPeople(names: string[], heights: number[]): string[] {
  const n = names.length
  const indices = Array.from({length: n}, (_, i) => i)
  indices.sort((a, b) => heights[b] - heights[a])
  const res = new Array(n)
  for (let i = 0; i < n; i++) {
      res[i] = names[indices[i]]
  }
  return res
};

// 时间复杂度：O(nlogn)，其中 n 是 names 和 heights 的长度。对 indices 数组排序的时间复杂度为 O(nlogn)。

// 空间复杂度：O(n)，其中 n 是 names 和 heights 的长度。排序过程中所需要的栈空间为 O(logn)，创建 indices 数组所需要的空间是 O(n)，对它们求和后空间复杂度渐进意义下等于 O(n)。
