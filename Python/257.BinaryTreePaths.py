# DFS 遍历加复制:O(N^2) 除答案数组外还要考虑栈:O(N^2)[整棵树呈链状]->O((logN)^2)[平衡二叉树(高度为logN)]
class Solution:
    def binaryTreePaths(self, root: TreeNode) -> List[str]:
      def construct_paths(root, path):
        if root:
          path += str(root.val)
          if not root.left and not root.right:  # 当前节点是叶子节点
            paths.append(path)  # 把路径加入到答案中
          else:
            path += '->'  # 当前节点不是叶子节点，继续递归遍历
            construct_paths(root.left, path)
            construct_paths(root.right, path)
      paths = []
      construct_paths(root, '')
      return paths

# BFS O(N^2) O(N^2)
class Solution:
    def binaryTreePaths(self, root: TreeNode) -> List[str]:
      paths = list()
      if not root:
        return paths
      node_queue = collections.deque([root])
      path_queue = collections.deque([str(root.val)])
      while node_queue:
        node = node_queue.popleft()
        path = path_queue.popleft()
        if not node.left and not node.right:
          paths.append(path)
        else:
          if node.left:
            node_queue.append(node.left)
            path_queue.append(path + '->' + str(node.left.val))
          if node.right:
            node_queue.append(node.right)
            path_queue.append(path + '->' + str(node.right.val))
      return paths