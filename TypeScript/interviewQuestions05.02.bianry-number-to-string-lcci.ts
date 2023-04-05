function printBin(num: number): string {
  let sb = '0.'
  while (sb.length <= 32 && !!num) {
      num *= 2
      let digit = num | 0
      sb += digit
      num -= digit
  }
  return sb.length <= 32 ? sb : "ERROR"
};
// 时间复杂度：O(C)，其中 C 是结果字符串的最大长度，C=32。最多计算 32 位，每一位的计算时间是 O(1)。
// 空间复杂度：O(C)，其中 C 是结果字符串的最大长度，C=32。存储结果的字符串需要 O(C) 的时间。