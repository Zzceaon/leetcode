// 双指针+两两合并
// var mergeKLists = function(lists) {
//     let mergeTwoLists = (l1, l2) => {
//         let preHead = new ListNode(-1);
//         let preNode = preHead;
//         while (l1 && l2) {
//             if (l1.val <= l2.val) {
//                 preNode.next = l1;
//                 l1 = l1.next;
//             }
//             else {
//                 preNode.next = l2;
//                 l2 = l2.next;
//             }
//             preNode = preNode.next;
//         }
//         preNode.next = l1 ? l1 : l2;
//         return preHead.next;
//     }
//     let n = lists.length;
//     if (n == 0) return null;
//     let res = lists[0];
//     for (let i = 1; i < n; i++) {
//         if (lists[i]) {
//             res = mergeTwoLists(res, lists[i]);
//         }
//     }
//     return res;
// };

// 数组
// var mergeKLists = function(lists) {
//     if (!lists || lists.length == 0) return null;
//     let arr = [];
//     let res = new ListNode(0);
//     lists.forEach(list => {
//         let cur = list;
//         while (cur) {
//             arr.push(cur.val);
//             cur = cur.next;
//         }
//     })
//     let cur = res;
//     arr.sort((a, b) => a - b).forEach(val => {
//         let node = new ListNode(val);
//         cur.next = node;
//         cur = cur.next;
//     })
//     return res.next;
// };

// 分治
// >> 是右移运算,在计算机中是一种运算操作,但是他的运算结果正好能对应一个整数的二分之一值,
// 这就正好能代替数学上的除2运算,但是比除2运算要快
// var mergeKLists = function(lists) {
//     let n = lists.length;
//     if (n == 0) return null;
//     let mergeTwoLists = (l1, l2) => {
//         if (l1 == null) return l2;
//         if (l2 == null) return l1;
//         if (l1.val < l2.val) {
//             l1.next = mergeTwoLists(l1.next, l2);
//             return l1;
//         }
//         else {
//             l2.next = mergeTwoLists(l1, l2.next);
//             return l2;
//         }
//     }
//     let merge = (left, right) => {
//         if (left == right) return lists[left];
//         let mid = (left + right) >> 1;
//         let l1 = merge(left, mid);
//         let l2 = merge(mid + 1, right);
//         return mergeTwoLists(l1, l2);
//     }
//     return merge(0, n - 1);
// };