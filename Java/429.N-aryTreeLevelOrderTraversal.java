/*
 * @Author: Zzceaon
 * @Date: 2020-07-05 23:04:36
 * @LastEditTime: 2020-07-06 22:21:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\Java\429.N-aryTreeLevelOrderTraversal.java
 */ 
// queue实现BFS O(n) O(n)
class Solution {
  public List<List<Integer>> levelOrder(Node root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;
    Queue<Node> queue = new LinkedList<>();
    queue.add(root);
    while (!queue.isEmpty()) {
      List<Integer> level = new ArrayList<>();
      int size = queue.size();
      for (int i = 0; i < size; i++) {
        Node node = queue.poll();
        level.add(node.val);
        queue.addAll(node.children);
      }
      result.add(level);
    }
    return result;
  }
}

// BFS简化版 o(n) o(n)
class Solution {
  public List<List<Integer>> levelOrder(Node root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;
    List<Node> previousLayer = Arrays.asList(root);
    while (!previousLayer.isEmpty()) {
      List<Node> currentLayer = new ArrayList<>();
      List<Integer> previousVals = new ArrayList<>();
      for (Node node : previousLayer) {
        previousVals.add(node.val);
        currentLayer.addAll(node.children);
      }
      result.add(previousVals);
      previousLayer = currentLayer;
    }
    return result;
  }
}

// 递归 O(n) O(logn)->O(n)
class Solution {
  private List<List<Integer>> result = new ArrayList<>();
  public List<List<Integer>> levelOrder(Node root) {
    if (root != null) traverseNode(root, 0);
    return result;
  }
  private void traverseNode(Node node, int level) {
    if (result.size() <= level) result.add(new ArrayList<>());
    result.get(level).add(node.val);
    for (Node child : node.children) traverseNode(child, level + 1);
  }
}