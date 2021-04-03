// 递归
// 时间复杂度：O(n)，其中 n 为二叉树节点的个数。二叉树的遍历中每个节点会被访问一次且只会被访问一次。
// 空间复杂度：O(n)。空间复杂度取决于递归的栈深度，而栈深度在二叉树为一条链的情况下会达到 O(n) 的级别。
const inorderTraversal = root => {
  const res = []
  const dfs = root => {
    if (!root) {
      return;
    }
    dfs(root.left);
    res.push(root.val);
    dfs(root.right);
  }
  dfs(root);
  return res;
};

// 迭代
// 时间复杂度：O(n)，其中 n 为二叉树节点的个数。二叉树的遍历中每个节点会被访问一次且只会被访问一次。
// 空间复杂度：O(n))。空间复杂度取决于栈深度，而栈深度在二叉树为一条链的情况下会达到 O(n) 的级别
const inorderTraversal = root => {
  const res = [], arr = [];
  while (root || arr.length) {
    while (root) {
      arr.push(root);
      root = root.left;
    }
    root = arr.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};