// BFS
var levelOrder = function(root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    res.push(node.val);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return res;
};