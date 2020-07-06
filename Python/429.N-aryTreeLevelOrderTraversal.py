# queue实现BFS O(n) O(n)
class Solution:
    def levelOrder(self, root: 'Node') -> List[List[int]]:
      if root is None: return []
      result = []
      queue = collections.deque([root])
      while queue:
        level = []
        for _ in range(len(queue)):
          node = queue.popleft()
          level.append(node.val)
          queue.extend(node.children)
        result.append(level)
      return result

# BFS简化版 o(n) o(n)
class Solution:
    def levelOrder(self, root: 'Node') -> List[List[int]]:
      if root is None: return []
      result = []
      previous_layer = [root]
      while previous_layer:
        current_layer = []
        result.append([])
        for node in previous_layer:
          result[-1].append(node.val)
          current_layer.extend(node.children)
        previous_layer = current_layer
      return result

# 递归 O(n) O(logn)->O(n)
class Solution:
    def levelOrder(self, root: 'Node') -> List[List[int]]:
      def traverse_node(node, level):
        if len(result) == level:
          result.append([])
        result[level].append(node.val)
        for child in node.children:
          traverse_node(child, level + 1)
      result = []
      if root is not None:
        traverse_node(root, 0)
      return result;