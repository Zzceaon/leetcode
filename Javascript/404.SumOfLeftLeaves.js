// DFS
var sumOfLeftLeaves = function(root) {
  const dfs = (root, isLeft) => {
    if (root == null) return 0
    if (root.left == null && root.right == null) {
      if (isLeft) return root.val
    }
    return dfs(root.left, true) + dfs(root.right, false)
  }
  return dfs(root, false)
}

// BFS
var sumOfLeftLeaves = function(root) {
  if (root == null) return 0
  let sum = 0
  const queue = []
  queue.push(root)
  while (queue.length) {
    const cur = queue.shift()
    if (cur.left) {
      if (cur.left.left == null && cur.left.right == null) sum += cur.left.val
      queue.push(cur.left)
    }
    if (cur.right) queue.push(cur.right)
  }
  return sum
}