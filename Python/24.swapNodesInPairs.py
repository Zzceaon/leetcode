# class Solution:
#     def swapPairs(self, head: ListNode) -> ListNode:
#         if not head or not head.next:
#             return head
#         p = head
#         new_start = p.next
#         while(True):
#             q = p.next
#             temp = q.next
#             q.next = p
#             if not temp or not temp.next:
#                 p.next = temp
#                 break
#             p.next = temp.next
#             p = temp
#         return new_start