// 贪心

// 我们可以假设 x,y,z 分别为从小到大排序后的 a,b,c，来讨论最小和最大移动次数。
//   1.当三枚石子连续放置时，即 (y−x)=1 并且 (z−y)=1，不需要额外移动，最小移动次数为 0。
//   2.当三枚石子中有两枚是连续放置，或者间隔为 1 时，我们只需对另外一枚石子移动一次，最小移动次数为 1。
//   3.对于其他情况，我们最小需要移动 2 次。
// 对于最多移动次数，我们可以考虑将 x 向右（增加 1），或者将 z 向左（减小 1），每次移动都会使得两侧的距离减小 1，所以最多可以移动 z−x−2 次。

function numMovesStones(a: number, b: number, c: number): number[] {
  let x = Math.min(Math.min(a, b), c)
  let z = Math.max(Math.max(a, b), c)
  let y = a + b + c - x - z
  let res = [2, z - x - 2]
  if (z - y === 1 && y - x === 1) {
      res[0] = 0
  } else if (z - y <= 2 || y - x <= 2) {
      res[0] = 1
  }
  return res
};

// 时间复杂度：O(1)。
// 空间复杂度：O(1)。