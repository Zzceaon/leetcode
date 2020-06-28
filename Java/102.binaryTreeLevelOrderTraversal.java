/*
 * @Author: Zzceaon
 * @Date: 2020-06-25 19:24:01
 * @LastEditTime: 2020-06-28 22:12:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\Java\102.binaryTreeLevelOrderTraversal.java
 */ 
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

