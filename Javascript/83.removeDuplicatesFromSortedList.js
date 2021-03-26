// 时间复杂度：O(n)O(n)，其中 nn 是链表的长度。
// 空间复杂度：O(1)O(1)。
var deleteDuplicates = function(head) {
  if (!head) {
      return head;
  }

  let cur = head;
  while (cur.next) {
      if (cur.val === cur.next.val) {
          cur.next = cur.next.next;
      } else {
          cur = cur.next;
      }
  }
  return head;
};