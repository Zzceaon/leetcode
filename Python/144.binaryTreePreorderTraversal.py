# 迭代
# class Solution:
#     def preorderTraversal(self, root: TreeNode) -> List[int]:
#         if root is None:
#             return []
#         stack, output = [root, ], []
#         while stack:
#             root = stack.pop()
#             if root is not None:
#                 output.append(root.val)
#                 if root.right is not None:
#                     stack.append(root.right)
#                 if root.left is not None:
#                     stack.append(root.left)
#         return output

# 莫里斯遍历
# 从当前节点向下访问先序遍历的前驱节点，每个前驱节点都恰好被访问两次。
# 首先从当前节点开始，向左孩子走一步然后沿着右孩子一直向下访问，直到到达一个叶子节点（当前节点的中序遍历前驱节点），
# 所以我们更新输出并建立一条伪边 predecessor.right = root 更新这个前驱的下一个点。如果我们第二次访问到前驱节点，
# 由于已经指向了当前节点，我们移除伪边并移动到下一个顶点。
# 如果第一步向左的移动不存在，就直接更新输出并向右移动。
class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        node, output = root, []
        while node:
            if not node.left:
                output.append(node.val)
                node = node.right
            else:
                predecessor = node.left
                while predecessor.right and predecessor.right is not node:
                    predecessor = predecessor.right
                if not predecessor.right:
                    output.append(node.val)
                    predecessor.right = node
                    node = node.left
                else:
                    predecessor.right = None
                    node = node.right
        return output