/*
 * @Author: Zzceaon
 * @Date: 2020-07-03 10:35:51
 * @LastEditTime: 2020-07-04 23:37:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\Java\offer32-3.java
 */ 
// 层序遍历 + 双端队列 O(n) O(n)
class Solution {
  public List<List<Integer>> levelOrder(TreeNode root) {
    Queue<TreeNode> queue = new LinkedList<>();
    List<List<Integer>> res = new ArrayList<>();
    if (root != null) queue.add(root);
    while (!queue.isEmpty()) {
      LinkedList<Integer> tmp = new LinkedList<>();
      for (int i = queue.size(); i > 0; i--) {
        TreeNode node = queue.poll();
        if (res.size() % 2 == 0) tmp.addLast(node.val);
        else tmp.addFirst(node.val);
        if (node.left != null) queue.add(node.left);
        if (node.right != null) queue.add(node.right);
      }
      res.add(tmp);
    }
    return res;
  }
}

// 层序遍历 + 双端队列 (奇偶层逻辑分离) O(n) O(n)
class Solution {
  public List<List<Integer>> levelOrder(TreeNode root) {
    Deque<TreeNode> deque = new LinkedList<>();
    List<List<Integer>> res = new ArrayList<>();
    if (root != null) deque.add(root);
    while (!deque.isEmpty()) {
      List<Integer> tmp = new ArrayList<>();
      for (int i = deque.size(); i > 0; i--) {
        TreeNode node = deque.removeFirst();
        tmp.add(node.val);
        if (node.left != null) deque.addLast(node.left);
        if (node.right != null) deque.addLast(node.right);
      }
      res.add(tmp);
      if (deque.isEmpty()) break;
      tmp = new ArrayList<>();
      for (int i = deque.size(); i > 0; i--) {
        TreeNode node = deque.removeLast();
        tmp.add(node.val);
        if (node.right != null) deque.addFirst(node.right);
        if (node.left != null) deque.addFirst(node.left);
      }
      res.add(tmp);
    }
    return res;
  }
}

// 层序遍历 + 倒序 O(n) O(n)
class Solution {
  public List<List<Integer>> levelOrder(TreeNode root) {
    Queue<TreeNode> queue = new LinkedList<>();
    List<List<Integer>> res = new ArrayList<>();
    if (root != null) queue.add(root);
    while (!queue.isEmpty()) {
      List<Integer> tmp = new ArrayList<>();
      for (int i = queue.size(); i > 0; i--) {
        TreeNode node = queue.poll();
        tmp.add(node.val);
        if (node.left != null) queue.add(node.left);
        if (node.right != null) queue.add(node.right);
      }
      if (res.size() % 2 == 1) Collections.reverse(tmp);
      res.add(tmp);
    }
    return res;
  }
}