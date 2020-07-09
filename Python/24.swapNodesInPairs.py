class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head
        p = head
        new_start = p.next
        while(True):
            q = p.next
            temp = q.next
            q.next = p
            if not temp or not temp.next:
                p.next = temp
                break
            p.next = temp.next
            p = temp
        return new_start

# 递归
class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head
        first_node = head
        second_node = head.next
        first_node.next = self.swapPairs(second_node.next)
        second_node.next = first_node
        return second_node

# 迭代
class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        dummy = ListNode(-1)
        dummy.next = head
        prev_node = dummy
        while head and head.next:
            first_node = head
            second_node = head.next
            prev_node.next = second_node
            first_node.next = second_node.next
            second_node.next = first_node
            prev_node = first_node
            head = first_node.next
        return dummy.next

class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        pre, pre.next = self, head
        while pre.next and pre.next.next:
          a = pre.next
          b = a.next
          pre.next, b.next, a.next = b, a, b.next
          pre = a
        return self.next