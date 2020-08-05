class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:
        res, path = [], []
        def recur(root, tar):
            if not root:
                return
            path.append(root.val)
            tar -= root.val
            if tar == 0 and not root.left and not root.right:
                res.append(list(path))
            # 递阶段
            recur(root.left, tar)
            recur(root.right, tar)
            # 归阶段
            path.pop()
        recur(root, sum)
        return res