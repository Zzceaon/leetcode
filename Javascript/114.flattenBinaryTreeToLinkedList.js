// 前序遍历(递归)
// O(n) O(n)
const flatten = root => {
  const list = [];
  preorderTraversal(root, list);
  for (let i = 1; i < list.length; i++) {
    const prev = list[i - 1], curr = list[i];
    prev.left = null;
    prev.right = curr;
  }
};
const preorderTraversal = (root, list) => {
  if (root != null) {
    list.push(root);
    preorderTraversal(root.left,list);
    preorderTraversal(root.right, list);
  }
}

// 前序遍历(迭代)
// O(n) O(n)
const flatten = root => {
  const list = [], stack = [];
  let node = root;
  while (node !== null || stack.length) {
    while (node !== null) {
      list.push(node);
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    node = node.right;
  }
  for (let i = 1; i < list.length; i++) {
    const prev = list[i - 1], curr = list[i];
    prev.left = null;
    prev.right = curr;
  }
};

// 前序遍历和展开同时进行
// O(n) O(n)
const flatten = root => {
  if (root === null) {
    return;
  }
  const stack = [];
  stack.push(root);
  let prev = null;
  while (stack.length) {
    const curr = stack.pop();
    if (prev !== null) {
      prev.left = null;
      prev.right = curr;
    }
    const left = curr.left, right = curr.right;
    if (right !== null) {
      stack.push(right);
    }
    if (left !== null) {
      stack.push(left);
    }
    prev = curr;
  }
};

// 寻找前驱节点
// O(n) O(1)
const flatten = root => {
  let curr = root;
  while (curr !== null) {
    if (curr.left !== null) {
      const next = curr.left;
      let pre = next;
      while (pre.right !== null) {
        pre = pre.right;
      }
      pre.right = curr.right;
      curr.left = null;
      curr.right = next;
    }
    curr = curr.right;
  }
};