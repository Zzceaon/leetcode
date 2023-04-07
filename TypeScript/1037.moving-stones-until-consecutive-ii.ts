function numMovesStonesII(stones: number[]): number[] {
    let n = stones.length
    stones.sort((a, b) => a - b)
    if (stones[n - 1] - stones[0] + 1=== n) return [0, 0]
    let ma = Math.max((stones[n - 1] - stones[1] + 1), (stones[n - 2] - stones[0] + 1)) - (n - 1)
    let mi = n, j = 0
    for (let i = 0; i < n; i++) {
        while (j + 1 < n && stones[j + 1] - stones[i] + 1 <= n) j++
        if (j - i + 1 === n - 1 && stones[j] - stones[i] + 1 === n - 1) {
            mi = Math.min(mi, 2)
        } else {
            mi = Math.min(mi, n - (j - i + 1))
        }
    }
    return [mi, ma]
}
// 时间复杂度: O(nlog⁡n)
// 空间复杂度: O(logn)