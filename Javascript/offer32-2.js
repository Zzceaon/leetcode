// BFS
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
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    level++;
  }
  return res;
};