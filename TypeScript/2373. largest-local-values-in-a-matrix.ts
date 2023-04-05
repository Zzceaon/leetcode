// 设 grid 的大小为 n×n，那么我们申请一个大小为 (n−2)×(n−2) 的矩阵 res 用来存放答案。我们遍历 grid 中每个 3×3 子矩阵的左上角，然后统计当前子矩阵的最大值放入 res 中。

// 具体做法是，我们顺序遍历 i (0≤i<n−2)，再顺序遍历 j (0≤j<n−2)，接着遍历求解 {grid(x,y) ∣ i≤x<i+3,j≤y<j+3} 的最大值放入 res[i][j] 中。

function largestLocal(grid: number[][]): number[][] {
  const n = grid.length
  const res = new Array(n - 2).fill(0).map(() => new Array(n - 2).fill(0))
  for (let i = 0; i < n - 2; ++i) {
      for (let j = 0; j < n - 2; ++j) {
          for (let x = i; x < i + 3; ++x) {
              for (let y = j; y < j + 3; ++y) {
                  res[i][j] = Math.max(res[i][j], grid[x][y])
              }
          }
      }
  }
  return res
};

// 时间复杂度：(n^2)，其中 n 是矩阵 grid 的行数和列数。
  
// 空间复杂度：O(1)。这里不考虑返回值的空间。