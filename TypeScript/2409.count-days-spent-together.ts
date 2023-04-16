// 分别计算出每个日子是一年中的第几天后求差

// 设计一个函数 calculateDayOfYear\textit{calculateDayOfYear}calculateDayOfYear 来计算输入中的每个日子在一年中是第几天。计算输入中的每个日子在一年中是第几天时，可以利用前缀和数组来降低每次计算的复杂度。知道每个日子是一年中的第几天后，可以先通过比较算出两人到达日子的最大值，离开日子的最小值，然后利用减法计算重合的日子。

function countDaysTogether(arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number {
  let datesOfMonths: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let prefixSum: number[] = [0]
  for (let i: number = 0; i < datesOfMonths.length; i++) {
      prefixSum.push(prefixSum[i] + datesOfMonths[i])
  }

  let arriveAliceDay: number = calculateDayOfYear(arriveAlice, prefixSum)
  let leaveAliceDay: number = calculateDayOfYear(leaveAlice, prefixSum)
  let arriveBobDay: number = calculateDayOfYear(arriveBob, prefixSum)
  let leaveBobDay: number = calculateDayOfYear(leaveBob, prefixSum)

  return Math.max(0, Math.min(leaveAliceDay, leaveBobDay) - Math.max(arriveAliceDay, arriveBobDay) + 1)
};
function calculateDayOfYear(day: string, prefixSum: number[]): number {
  let month: number = parseInt(day.substring(0, 2))
  let date: number = parseInt(day.substring(3))
  return prefixSum[month - 1] + date
}

// 时间复杂度：O(1)，最耗时的操作是计算前缀和，因为一年中只有 12 个月，因此时间复杂度是常数。
// 空间复杂度：O(1)，最消耗空间的是存储每个月日子的数组和它的前缀和数组，因为一年中只有 12 个月，因此空间复杂度是常数。