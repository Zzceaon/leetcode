// BFS O(n) O(n)
var levelOrder = function(root) {
  let result = [];
  if (!root) return result;
  let queue = [root];
  while (queue.length) {
    let rowNodes = queue.splice(0);
    let level = [];
    for (let node of rowNodes) {
      level.push(node.val);
      if (node.children) {
        for (let child of node.children) {
          queue.push(child);
        }
      }
    }
    result.push(level);
  }
  return result;
};