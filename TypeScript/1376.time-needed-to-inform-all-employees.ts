// DFS

//题目保证员工的从属关系可以用树结构显示，所以我们可以根据数组 manager 来构建树模型，其中每一个员工为一个节点，每一个员工的上司为其父节点，总负责人为根节点。我们存储每一个节点的子节点，然后我们可以通过「自顶向下」的方式，从根节点开始往下「深度优先搜索」来传递信息传递的过程，计算从每一个节点往下传递信息的所需要的最大时间。

function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {
  const g = new Map()
  const dfs = (cur, informTime, g) => {
      let res = 0
      for (const neighbor of g.get(cur) || []) {
          res = Math.max(res, dfs(neighbor, informTime, g))
      }
      return informTime[cur] + res
  }
  for (let i = 0; i < n; i++) {
      if (!g.has(manager[i])) {
          g.set(manager[i], [])
      }
      g.get(manager[i]).push(i)
  }
  return dfs(headID, informTime, g)
};

// 时间复杂度：O(n)。
// 空间复杂度：O(n)，主要为建图的空间开销。