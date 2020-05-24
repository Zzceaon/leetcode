# 递归
class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if root is not None:
            root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
        return root