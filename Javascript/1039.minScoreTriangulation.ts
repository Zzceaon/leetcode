// dp
// 设 dp[i][j](j≥i+2) 的值为顶点 i,i+1,…,j−1,j 构成的凸 j−i+1 边形进行三角形剖分后可以得到的最低分。当 i+2=j 时，凸多边形退化为三角形。其他情况下，需要进行剖分，假设剖分得到的三角形中，顶点 i,j 和另一个顶点 k(i<k<j) 构成了一个三角形，那么三角形 i, k, j 就将这个凸多边形分成了三部分：
// 1.顶点 i,i+1,…,k−1,k 构成的凸 k−i+1 边形。当 k=i+1 时，这部分不存在。
// 2.顶点 i,k,j 构成的三角形。
// 3.顶点 k,k+1,…,j−1,j 构成的凸 j−k+1 边形。当 j=k+1 时，这部分不存在。
// 凸多边形的值就是这三部分的值之和。可以通过遍历 k 的值，来求出多边形的值的最小值。而第一部分和第三部分的值，也可以通过相同的方法求得最小值。
// 代码实现上，可以通过记忆化搜索来完成。最后返回 dp[0][n−1] 即可。

function minScoreTriangulation(values: number[]): number {
    const n = values.length, memo = new Map()
    const dp = (i, j) => {
        if (i + 2 > j) return 0
        if (i + 2 === j) {
            return values[i] * values[i + 1] * values[j]
        }
        const key = i * n + j
        if (!memo.has(key)) {
            let minScore = Number.MAX_VALUE
            for (let k = i + 1; k < j; ++k) {
                minScore = Math.min(minScore, values[i] * values[k] * values[j] + dp(i, k) + dp(k, j))
            }
            memo.set(key, minScore)
        }
        return memo.get(key)
    }
    return dp(0, n - 1)
};
// 时间复杂度：O(n^3)，动态规划一共有 O(n^2)个状态，计算每个状态消耗 O(n)
// 空间复杂度：O(n^2)，动态规划一共有 O(n^2)个状态。
