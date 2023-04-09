// 单调栈

var nextLargerNodes = function(head) {
    const ans = [];
    const stack = [];

    let cur = head;
    let idx = -1;
    while (cur) {
        ++idx;
        ans.push(0);
        while (stack.length && stack[stack.length - 1][0] < cur.val) {
            ans[stack.pop()[1]] = cur.val;
        }
        stack.push([cur.val, idx]);
        cur = cur.next;
    }

    const size = ans.length;
    const arr = new Array(size);
    for (let i = 0; i < size; ++i) {
        arr[i] = ans[i];
    }
    return arr;
};

// 时间复杂度：O(n)，其中 n 是链表的长度。对链表进行遍历需要 O(n) 的时间，链表中的每个元素恰好入栈一次，最多出栈一次，这一部分的时间也为 O(n)。
// 空间复杂度：O(n)，其中 n 是链表的长度。即为单调栈需要的空间。