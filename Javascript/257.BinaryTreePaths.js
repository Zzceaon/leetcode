// DFS 遍历加复制:O(N^2) 除答案数组外还要考虑栈:O(N^2)[整棵树呈链状]->O((logN)^2)[平衡二叉树(高度为logN)]
var binaryTreePaths = function(root) {
  const paths = []
  const construct_paths = (root, path) => {
    if (root) {
      path += root.val.toString()
      if (root.left === null && root.right === null) paths.push(path)
      else {
        path += '->'
        construct_paths(root.left, path)
        construct_paths(root.right, path)
      }
    }
  }
  construct_paths(root, '')
  return paths
}

// BFS O(N^2) O(N^2)
var binaryTreePaths = function(root) {
  const paths = []
  if (root === null) return paths
  const node_queue = [root]
  const path_queue = [root.val.toString()]
  while (node_queue.length) {
    const node = node_queue.shift()
    const path = path_queue.shift()
    if (node.left === null && node.right === null) paths.push(path)
    else {
      if (node.left !== null) {
        node_queue.push(node.left)
        path_queue.push(path + '->' + node.left.val.toString())
      }
      if (node.right !== null) {
        node_queue.push(node.right)
        path_queue.push(path + '->' + node.right.val.toString())
      }
    }
  }
  return paths
}