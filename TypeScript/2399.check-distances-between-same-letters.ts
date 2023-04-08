// 模拟
// 由于题目中每个字母恰好出现两次，因此我们使用数组 firstIndex 记录每个字母从左到右第一次出现的位置，当该字母第二次出现时，减去第一次出现的位置即可得到两个相同字母之间的字母数量。初始化 firstIndex 中的元素全为 0，为了方便计算，记录字符 s[i] 出现的位置为 i+1。按照上述检测所有的字符，如果所有的字符都满足匀整性，则返回 true，否则返回 false。

function checkDistances(s: string, distance: number[]): boolean {
    let firstIndex = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        let idx = s.charCodeAt(i) - 'a'.charCodeAt(0)
        if (firstIndex[idx] !== 0 && i - firstIndex[idx] !== distance[idx]) {
            return false
        }
        firstIndex[idx] = i + 1
    }
    return true
};

// 时间复杂度：O(n)，其中 n 表示字符串的长度。只需要遍历字符串一次即可，总的时间复杂度为 O(n)。
// 空间复杂度：O(∣Σ∣)，其中∣Σ∣ 表示字符集的大小，在本题中∣Σ∣=26。只需要记录每个字母第一次出现的位置，需要的空间为 O(∣Σ∣)。