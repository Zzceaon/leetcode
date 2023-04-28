// 递归

const check = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (!p && !q) return true
  if (!p || !q) return false
  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left)
}
function isSymmetric(root: TreeNode | null): boolean {
  return check(root, root)
};

// 时间复杂度：这里遍历了这棵树，渐进时间复杂度为 O(n)。
// 空间复杂度：这里的空间复杂度和递归使用的栈空间有关，这里递归层数不超过 n，故渐进空间复杂度为 O(n)。