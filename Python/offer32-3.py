'''
@Author: Zzceaon
@Date: 2020-07-03 10:35:23
@LastEditTime: 2020-07-04 23:27:20
@LastEditors: Please set LastEditors
@Description: In User Settings Edit
@FilePath: \leetcode\Python\offer32-3.py
'''
# 层序遍历 + 双端队列 O(n) O(n)
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
      if not root: return []
      res, deque = [], collections.deque([root])
      while deque:
        tmp = collections.deque()
        for _ in range(len(deque)):
          node = deque.popleft()
          if len(res) % 2:
            tmp.appendleft(node.val)
          else:
            tmp.append(node.val)
          if node.left:
            deque.append(node.left)
          if node.right:
            deque.append(node.right)
        res.append(list(tmp))
      return res

# 层序遍历 + 双端队列 (奇偶层逻辑分离) O(n) O(n)
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
      if not root: return []
      res, deque = [], collections.deque()
      deque.append(root)
      while deque:
        tmp = []
        for _ in range(len(deque)):
          node = deque.popleft()
          tmp.append(node.val)
          if node.left: deque.append(node.left)
          if node.right: deque.append(node.right)
        res.append(tmp)
        if not deque: break
        tmp = []
        for _ in range(len(deque)):
          node = deque.pop()
          tmp.append(node.val)
          if node.right: deque.appendleft(node.right)
          if node.left: deque.appendleft(node.left)
        res.append(tmp)
      return res

# 层序遍历 + 倒序 O(n) O(n)
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
      if not root: return []
      res, queue = [], collections.deque()
      queue.append(root)
      while queue:
        tmp = []
        for _ in range(len(queue)):
          node = queue.popleft()
          tmp.append(node.val)
          if node.left: queue.append(node.left)
          if node.right: queue.append(node.right)
        res.append(tmp[::-1] if len(res) % 2 else tmp)
      return res