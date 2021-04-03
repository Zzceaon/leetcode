// 动态规划
// 时间复杂度：O(mn)。
// 空间复杂度：O(mn)，即为存储所有状态需要的空间。注意到 f(i, j) 仅与第 i 行和第 i-1 行的状态有关，因此我们可以使用滚动数组代替代码中的二维数组，使空间复杂度降低为 O(n)。此外，由于我们交换行列的值并不会对答案产生影响，因此我们总可以通过交换 m 和 n 使得 m≤n，这样空间复杂度降低至 O(min(m, n))。
const uniquePaths = (m, n) => {
  const arr = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    arr[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    arr[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }
  return arr[m - 1][n - 1];
};