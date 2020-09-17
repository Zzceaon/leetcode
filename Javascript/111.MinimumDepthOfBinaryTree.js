var minDepth = function(root) {
  if (root == null) {
    return 0
  }
  else if (!root.left || !root.right) {
    return (Math.max(minDepth(root.left), minDepth(root.right))) + 1
  }
  else {
    return (Math.min(minDepth(root.left), minDepth(root.right))) + 1
  }
}