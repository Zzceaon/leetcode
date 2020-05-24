// 迭代
// class Solution {
//     public List<Integer> preorderTraversal(TreeNode root) {
//         LinkedList<TreeNode> stack = new LinkedList<>();
//         LinkedList<Integer> output =  new LinkedList<>();
//         if (root == null) {
//             return output;
//         }
//         stack.add(root);
//         while (!stack.isEmpty()) {
//             TreeNode node = stack.pollLast();
//             output.add(node.val);
//             if (node.right != null) {
//                 stack.add(node.right);
//             }
//             if (node.left != null) {
//                 stack.add(node.left);
//             }
//         }
//         return output;
//     }
// }

// 莫里斯遍历
// 从当前节点向下访问先序遍历的前驱节点，每个前驱节点都恰好被访问两次。
// 首先从当前节点开始，向左孩子走一步然后沿着右孩子一直向下访问，直到到达一个叶子节点（当前节点的中序遍历前驱节点），
// 所以我们更新输出并建立一条伪边 predecessor.right = root 更新这个前驱的下一个点。
// 如果我们第二次访问到前驱节点，由于已经指向了当前节点，我们移除伪边并移动到下一个顶点。
// 如果第一步向左的移动不存在，就直接更新输出并向右移动。
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        LinkedList<Integer> output = new LinkedList<>();
        TreeNode node = root;
        while (node != null) {
            if (node.left == null) {
                output.add(node.val);
                node = node.right;
            }
            else {
                TreeNode predecessor = node.left;
                while ((predecessor.right != null) && (predecessor.right != node)) {
                    predecessor = predecessor.right;
                }
                if (predecessor.right == null) {
                    output.add(node.val);
                    predecessor.right = node;
                    node = node.left;
                }
                else {
                    predecessor.right = null;
                    node = node.right;
                }
            }
        }
        return output;
    }
}
