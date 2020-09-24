// Morris 中序遍历 O(N) O(1)
var findMode = function(root) {
  let base = 0,
    count = 0,
    maxCount = 0,
    answer = []
  const update = x => {
    if (x === base) count++
    else {
      count = 1
      base = x
    }
    if (count === maxCount) answer.push(base)
    if (count > maxCount) {
      maxCount = count
      answer = [base]
    }
  }
  let cur = root,
    pre = null
  while (cur !== null) {
    if (cur.left === null) {
      update(cur.val)
      cur = cur.right
      continue
    }
    pre = cur.left
    while (pre.right !== null && pre.right !== cur) {
      pre = pre.right
    }
    if (pre.right === null) {
      pre.right = cur
      cur = cur.left
    } else {
      pre.right = null
      update(cur.val)
      cur = cur.right
    }
  }
  return answer
}