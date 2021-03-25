// 时间复杂度：O(n)O(n)，其中 nn 是链表的长度。
// 空间复杂度：O(1)O(1)。
var deleteDuplicates = function(head) {
  if (!head) {
    return head;
  }
  const dummy = new ListNode(0, head);
  let cur = dummy;
  while (cur.next && cur.next.next) {
    if (cur.next.val == cur.next.next.val) {
      const x = cur.next.val;
      while (cur.next && cur.next.val == x) {
        cur.next = cur.next.next;
      }
    }else {
      cur = cur.next;
    }
  }
  return dummy.next;
};