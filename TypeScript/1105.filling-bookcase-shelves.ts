// /dp

// 根据题意，按顺序将这些书摆放到总宽度为 shelfWidth 的书架上。先选几本书放在书架上，然后再建一层书架。重复这个过程，直到把所有的书都放在书架上。

// 考虑用「动态规划」来解决这个问题，dp[i] 来表示放下前 i 本书所用的最小高度。 因为最多 1000 本书， 每本书高度最大 1000，我们可以把 dp[i] 初始化为 1000000， 初始化 dp[0] 为零，表示没有书是高度为零。

// 当我们要放置前 i 本书时候，假定前 j 本书放在上面的书架上，其中 j<i, 前 j 本书放好后剩余的书放在最后一层书架上, 这一层书架的高度是这部分书的高度最大值，由此得到如此递推公式：
//   dp[i]=min(dp[j]+max(books[k]))
// 其中满足
//   0≤j≤k<i≤n,∑books[k]≤shelfWidth

// 我们循环遍历 i, 求出 dp[i] 的值，最后返回 dp[n] 为最终答案。

function minHeightShelves(books: number[][], shelfWidth: number): number {
  const n = books.length
  const dp = new Array(n + 1).fill(1000000)
  dp[0] = 0
  for (let i = 0; i < n; i++) {
      let maxHeight = 0, curWidth = 0
      for (let j = i; j >= 0; j--) {
          curWidth += books[j][0]
          if (curWidth > shelfWidth) break
          maxHeight = Math.max(maxHeight, books[j][1])
          dp[i + 1] = Math.min(dp[i + 1], dp[j] + maxHeight)
      }
  }
  return dp[n]
};

// 时间复杂度：(n ^ 2)，其中 n 是 books 的长度。
// 空间复杂度：O(n)，其中 n 是 books 的长度。