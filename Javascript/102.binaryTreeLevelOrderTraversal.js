/*
 * @Author: Zzceaon
 * @Date: 2020-06-25 19:23:43
 * @LastEditTime: 2020-06-25 19:29:41
 * @LastEditors: Please set LastEditors
 * @Description: leetcode 102.binaryTreeLevelOrderTraversal
 * @FilePath: \leetcode\Javascript\102.binaryTreeLevelOrderTraversal.js
 */ 
// BFS
var levelOrder = function(root) {
  const ret = [];
  if (!root) return ret;

  const q = [];
  q.push(root);
  while (q.length !== 0) {
    const currentLevelSize = q.length;
    ret.push([]);
    for (let i = 1; i <= currentLevelSize; ++i) {
      const node = q.shift();
      ret[ret.length - 1].push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }
  return ret;
};