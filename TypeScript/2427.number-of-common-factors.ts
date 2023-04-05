// 枚举到较小值
// 由于 a 和 b 的公因子一定不会超过 a 和 b，因此我们只需要在 [1,min(a,b)] 中枚举 x，并判断 x 是否为公因子即可。

function commonFactors(a: number, b: number): number {
  let ans = 0
  for (let i = 1; i <= Math.min(a, b); i++) {
      if (a % i === 0 && b % i === 0) {
          ans++
      }
  }
  return ans
};
// 时间复杂度: O(n)
// 空间复杂度: O(1)