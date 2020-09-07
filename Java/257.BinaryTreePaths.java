// DFS 遍历加复制:O(N^2) 除答案数组外还要考虑栈:O(N^2)[整棵树呈链状]->O((logN)^2)[平衡二叉树(高度为logN)]
class Solution {
  public List<String> binaryTreePaths(TreeNode root) {
    List<String> paths = new ArrayList<String>();
    constructPaths(root, "", paths);
    return paths;
  }
  public void constructPaths(TreeNode root, String path, List<String> paths) {
    if (root != null) {
      StringBuffer pathSB = new StringBuffer(path);
      pathSB.append(Integer.toString(root.val));
      if (root.left == null && root.right == null) paths.add(pathSB.toString());
      else {
        pathSB.append("->");
        constructPaths(root.left, pathSB.toString(), paths);
        constructPaths(root.right, pathSB.toString(), paths);
      }
    }
  }
}

// BFS O(N^2) O(N^2)
class Solution {
  public List<String> binaryTreePaths(TreeNode root) {
    List<String> paths = new ArrayList<String>();
    if (root == null) return paths;
    Queue<TreeNode> nodeQueue = new LinkedList<TreeNode>();
    Queue<String> pathQueue = new LinkedList<String>();
    nodeQueue.offer(root);
    pathQueue.offer(Integer.toString(root.val));
    while (!nodeQueue.isEmpty()) {
      TreeNode node = nodeQueue.poll();
      String path = pathQueue.poll();
      if (node.left == null && node.right == null) paths.add(path);
      else {
        if (node.left != null) {
          nodeQueue.offer(node.left);
          pathQueue.offer(new StringBuffer(path).append("->").append(node.left.val).toString());
        }
        if (node.right != null) {
          nodeQueue.offer(node.right);
          pathQueue.offer(new StringBuffer(path).append("->").append(node.right.val).toString());
        }
      }
    }
    return paths;
  }
}