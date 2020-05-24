// 递归
// var maxDepth = function(root) {
//     if (root == null) {
//         return 0;
//     }
//     else {
//         return (Math.max(maxDepth(root.left), maxDepth(root.right))) + 1;
//     }
// };

// 迭代
var maxDepth = function(root) {
    let stack = [];
    if (root != null) {
        stack.push({"key": root, "value": 1});
    }
    let depth = 0;
    while (stack.length != 0) {
        let current = stack.pop();
        let root = current.key;
        let current_depth = current.value;
        if (root != null) {
            depth = Math.max(depth, current_depth);
            stack.push({"key": root.left, "value": current_depth + 1});
            stack.push({"key": root.right, "value": current_depth + 1});
        }
    }
    return depth;
};