// dp

// 将 arr 分割成若干个子数组，每个子数组的长度都不超过 k。分割后每个元素都将变成其所属子数组中的最大值。现考虑如何使数组和最大。
// 我们很难同时分割所有元素，如果能一次只考虑分割一组，然后利用之前分割得到的信息，任务就会变得简单。试想当前枚举到了 i，我们把 i 当做这一组的末尾，然后在 [i−k,i−1] 的范围内枚举 [j+1,i] 这一段可以当做新的一组。这时我们需要利用以 j 为结尾分割的最大和，可以发现如果将这个问题的答案提前计算并存储下来，以 i 为结尾的问题就可以迎刃而解。
// 具体地，我们设 d[i] 为以 i 结尾分割的最大和，求解时倒序枚举 j (j∈[i−k,i−1])，那么转移方程有：
//   d[i]=max{d[j]+maxValue×(i−j)}
// 其中 maxValue=max{arr[j+1],⋯,arr[i]}。
// 答案为 d[n]，n是 arr 的长度。

function maxSumAfterPartitioning(arr: number[], k: number): number {
  const n: number = arr.length
  const d: number[] = new Array(n + 1).fill(0)
  for (let i: number = 1; i <= n; i++) {
      let maxValue: number = arr[i - 1]
      for (let j: number = i - 1; j >= Math.max(0, i - k); j--) {
          d[i] = Math.max(d[i], d[j] + maxValue * (i - j))
          if (j > 0) {
              maxValue = Math.max(maxValue, arr[j - 1])
          }
      }
  }
  return d[n]
};

// 时间复杂度：O(nk)，其中 n 是 arr 的长度。倒序遍历 j 的过程中可以顺便维护区间最大值，这样 d[i] 的转移可以在 O(k) 的时间内完成。
// 空间复杂度：O(n)，其中 n 是 arr 的长度。