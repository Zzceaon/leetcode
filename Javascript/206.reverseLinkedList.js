// 迭代
// var reverseList = function(head) {
//     let prev = null;
//     let curr = head;
//     while (curr != null) {
//         let nextTemp = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = nextTemp;
//     }
//     return prev;
// };

// 尾递归
// var reverseList = function(head) {
//     let reverse = (prev, curr) => {
//         if (!curr) return prev;
//         let next = curr.next;
//         curr.next = prev;
//         return reverse(curr, next);
//     }
//     return reverse(null, head);
// };

// 递归
// var reverseList = function(head) {
//     if (!head || !head.next) return head;
//     let nextTemp = head.next;
//     let reverseHead = reverseList(nextTemp);
//     head.next = null;
//     nextTemp.next = head;
//     return reverseHead;
// };

// Stack
var reverseList = function(head) {
    let tmp = head;
    let tHead = new ListNode(0);
    let pre = tHead;
    let stack = [];
    while(tmp) {
        stack.push(tmp.val);
        tmp = tmp.next;
    }
    while(stack.length != 0) {
        pre.next = new ListNode(stack.pop());
        pre = pre.next;
    }
    return tHead.next;
};