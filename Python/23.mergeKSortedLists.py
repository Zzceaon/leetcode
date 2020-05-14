# class Solution:
#     def mergeKLists(self, lists: List[ListNode]) -> ListNode:
#         self.nodes = []
#         head = point = ListNode(0)
#         for l in lists:
#             while l:
#                 self.nodes.append(l.val)
#                 l = l.next
#         for x in sorted(self.nodes):
#             point.next = ListNode(x)
#             point = point.next
#         return head.next

# 优化队列
# from Queue import PriorityQueue
# class Solution:
#     def mergeKLists(self, lists: List[ListNode]) -> ListNode:
#         head = point = ListNode(0)
#         q = PriorityQueue()
#         for l in lists:
#             if l:
#                 q.put((l.val, l))
#         while not q.empty():
#             val, node = q.get()
#             point.next = ListNode(val)
#             point = point.next
#             node = node.next
#             if node:
#                 q.put((node.val, node))
#         return head.next

# 分治
class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        amount = len(lists)
        interval = 1
        while interval < amount:
            for i in range(0, amount - interval, interval * 2):
                lists[i] = self.merge2List(lists[i], lists[i + interval])
            interval *= 2
        return lists[0] if amount > 0 else None
    def merge2List(self, l1, l2):
        head = point = ListNode(0)
        while l1 and l2:
            if l1.val <= l2.val:
                point.next = l1
                l1 = l1.next
            else:
                point.next = l2
                l2 = l1
                l1 = point.next.next
            point = point.next
        if not l1:
            point.next = l2
        else:
            point.next = l1
        return head.next