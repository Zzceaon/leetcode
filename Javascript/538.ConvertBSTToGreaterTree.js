// 反序中序遍历 O(N) O(N)
var convertBST = function(root) {
  let sum = 0
  const inOrder = root => {
    if (root == null) return
    inOrder(root.right)
    sum += root.val
    root.val = sum
    inOrder(root.left)
  }
  inOrder(root)
  return root
}