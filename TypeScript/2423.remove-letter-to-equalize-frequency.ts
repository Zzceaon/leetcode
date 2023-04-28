// 注意到删除不同位置的相同字符，不会改变剩余字符的频率，我们可以进行优化，只枚举删除不同的字符即可。
// 首先遍历输入字符串 word，统计每一个字符出现的频率。然后我们按照字母序，遍历所有的字符。如果当前这个字符出现在原字符串中，我们假定要删除这个字符，把这个字符出现的频率减一，统计所有出现字符的频率集合。如果集合大小为 1，则说明剩余每个字母出现频率相同，我们直接返回 true，反之说明删除当前字符不可行，我们把这个字符的频率加一进行还原。
// 最后，当我们尝试过所有不同字符后，还没有找到能删除的字符，使得满足要求，我们返回 false。

function equalFrequency(word: string): boolean {
  const charCount = new Array(26).fill(0)
  for (let c of word) {
      charCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }
  for (let i = 0; i < 26; i++) {
      if (charCount[i] === 0) continue
      charCount[i]--
      const freq = new Set()
      for (let f of charCount) {
          if (f > 0) {
              freq.add(f)
          }
      }
      if (freq.size === 1) return true
      charCount[i]++
  }
  return false
};