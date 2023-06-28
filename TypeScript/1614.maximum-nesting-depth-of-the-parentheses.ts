function maxDepth(s: string): number {
  let ans: number = 0, size: number = 0
  for (let i = 0; i < s.length; i++) {
      let ch = s[i]
      if (ch === "(") {
          size++
          ans = Math.max(ans, size)
      } else if (ch === ")") {
          size--
      }
  }
  return ans
};