// stack O(max(m, n)) O(m + n)
var addTwoNumbers = function(l1, l2) {
  let s1 = [],
      s2 = [];
  while (l1) {
    s1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    s2.push(l2.val);
    l2 = l2.next;
  }
  let carry = 0,
      res = null;
  while (s1.length > 0 || s2.length > 0 || carry !== 0) {
    let a = s1.length > 0 ? s1.pop() : 0,
        b = s2.length > 0 ? s2.pop() : 0;
    let sum = a + b + carry;
    carry = sum / 10 | 0;
    curNode = new ListNode(sum % 10);
    curNode.next = res;
    res = curNode;
  }
  return res;
};