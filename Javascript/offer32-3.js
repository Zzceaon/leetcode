/*
 * @Author: Zzceaon
 * @Date: 2020-07-03 10:35:37
 * @LastEditTime: 2020-07-05 00:03:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\Javascript\offer32-3.js
 */ 
// 层序遍历 O(n) o(n)
var levelOrder = function(root) {
  if (!root) return [];
  const queue = [root];
  const res = [];
  let level = 0;
  while (queue.length) {
    res[level] = [];
    let levelNum = queue.length;
    while (levelNum--) {
      const node = queue.shift();
      res[level].push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (level % 2) res[level].reverse();
    level++;
  }
  return res;
};