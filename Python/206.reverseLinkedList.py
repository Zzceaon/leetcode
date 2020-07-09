# 迭代
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        prev = None
        curr = head
        while(curr != None):
            nextTemp = curr.next
            curr.next = prev
            prev = curr
            curr = nextTemp
        return prev

# 递归
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if not head or not  head.next:
            return head
        nextTemp = head.next
        reverseHead = self.reverseList(nextTemp)
        head.next = None
        nextTemp.next = head;
        return reverseHead

class Solution:
        def reverseList(self, head: ListNode) -> ListNode:
            cur, prev = head, None
            while cur:
              cur.next, prev, cur = prev, cur, cur.next
            return prev