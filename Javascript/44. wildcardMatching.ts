function multiply(num1: string, num2: string): string {
  let len1 = num1.length, len2 = num2.length
  const pos = new Array(len1 + len2).fill(0)
  for (let i = len1 - 1; i >= 0; i--) {
      let n1 = +num1[i]
      for (let j = len2 - 1; j >= 0; j--) {
          let n2 = +num2[j]
          let multi = n1 * n2
          let sum = pos[i + j + 1] + multi
          pos[i + j + 1] = sum % 10
          pos[i + j] += sum / 10 | 0
      }
  }
  while(pos[0] === 0) {
      pos.shift()
  }
  return pos.length ? pos.join('') : '0'
};
// 时间复杂度: O(n^2)
// 空间复杂度: O(n)