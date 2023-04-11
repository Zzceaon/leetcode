// 模拟
// 当机器人执行完指令 instructions 后，它的位置和方向均有可能发生变化。
//   如果它的位置仍位于原点，那么不管它此时方向是什么，机器人都将永远无法离开。
//   如果它的位置不在原点，那么需要考虑此时机器人的方向：
//     如果机器人仍然朝北，那么机器人可以不会陷入循环。假设执行完一串指令后，机器人的位置是 (x,y) 且不为原点，方向仍然朝北，那么执行完第二串指令后，机器人的位置便成为 (2*x,2*y)，会不停地往外部移动，不会陷入循环。
//     如果机器人朝南，那么执行第二串指令时，机器人的位移会与第一次相反，即第二次的位移是 (−x,−y)，并且结束后会回到原来的方向。这样一来，每两串指令之后，机器人都会回到原点，并且方向朝北，机器人会陷入循环。
//     如果机器人朝东，即右转了 90°。这样一来，每执行一串指令，机器人都会右转 90°。那么第一次和第三次指令的方向是相反的，第二次和第四次指令的方向是相反的，位移之和也为 0，这样一来，每四次指令之后，机器人都会回到原点，并且方向朝北，机器人会陷入循环。如果机器人朝西，也是一样的结果。
// 因此，机器人想要摆脱循环，在一串指令之后的状态，必须是不位于原点且方向朝北。

function isRobotBounded(instructions: string): boolean {
  const direc = [[0, 1], [1, 0], [0, -1], [-1 ,0]]
  let directIndex = 0, x = 0, y = 0
  const n = instructions.length
  for (let i = 0; i < n; i++) {
      let instruction = instructions[i]
      if (instruction === "G") {
          x += direc[directIndex][0]
          y += direc[directIndex][1]
      } else if (instruction === "L") {
          directIndex += 3
          directIndex %= 4
      } else {
          directIndex++
          directIndex %= 4
      }
  }
  return directIndex !== 0 || (x === 0 && y === 0)
};

// 时间复杂度：O(n)，其中 n 是 instructions 的长度，需要遍历 instructions 一次。
// 空间复杂度：O(1)，只用到常数空间。