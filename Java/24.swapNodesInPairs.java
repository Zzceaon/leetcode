// 递归
// class Solution {
//     public ListNode swapPairs(ListNode head) {
//         if((head == null) || (head.next == null)) {
//             return head;
//         }
//         ListNode firstNode = head;
//         ListNode secondNode = head.next;
//         firstNode.next = swapPairs(secondNode.next);
//         secondNode.next = firstNode;
//         return secondNode;
//     }
// }

// 迭代
class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode dummy = new ListNode(-1);
        dummy.next = head;
        ListNode prevNode = dummy;
        while((head != null) && (head.next != null)) {
            ListNode firstNode = head;
            ListNode secondNode = head.next;
            prevNode.next = secondNode;
            firstNode.next = secondNode.next;
            secondNode.next = firstNode;
            prevNode = firstNode;
            head = firstNode.next;
        }
        return dummy.next;
    }
}