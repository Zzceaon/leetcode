// 动态规划
// 时间复杂度：O(mn)，其中 m 和 n 分别是网格的行数和列数。需要对整个网格遍历一次，计算 dp 的每个元素的值。
// 空间复杂度：O(mn)，其中 m 和 n 分别是网格的行数和列数。创建一个二维数组 dp，和网格大小相同。空间复杂度可以优化，例如每次只存储上一行的 dp 值，则可以将空间复杂度优化到 O(n)。
const minPathSum = grid => {
  if (grid.length == 0) {
    return 0;
  }
  const m = grid.length, n = grid[0].length;
  const dp = grid.slice(0);
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[m - 1][n - 1];
}