// BFS
// class Solution {
//   public List<List<Integer>> levelOrder(TreeNode root) {
//     List<List<Integer>> res = new ArrayList<>();
//     Queue<TreeNode> q = new LinkedList<>();
//     q.offer(root);
//     while (!q.isEmpty()) {
//       int size = q.size();
//       List<Integer> level = new LinkedList<>();
//       for (int i = 0; i < size; ++i) {
//         TreeNode cur = q.peek();
//         q.poll();
//         if (cur == null) {
//           continue;
//         }
//         level.add(cur.val);
//         q.offer(cur.left);
//         q.offer(cur.right);
//       }
//       if (!level.isEmpty()) {
//         res.add(level);
//       }
//     }
//     return res;
//   }
// }

// DFS
class Solution {
  public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> res = new ArrayList<>();
    if (root != null) {
      dfs(res, root, 0);
    }
    return res;
  }
  public void dfs(List<List<Integer>> res, TreeNode node, int level) {
    if (res.size() - 1 < level) {
      res.add(new ArrayList<>());
    }
    res.get(level).add(node.val);
    if (node.left != null) {
      dfs(res, node.left, level + 1);
    }
    if (node.right != null) {
      dfs(res, node.right, level + 1);
    }
  }
}
