// 时间复杂度：O(N)O(N)。从 NN 到 11 每一个元素进栈一次，出栈一次。
// 空间复杂度：O(N)O(N)。由于「乘」「除」运算在进栈、出栈过程中被计算出来，最后一步弹出栈之前，栈里保存的是「加」「减」法项。
const clumsy = function(N) {
  const stack = [N--];

  let index = 0;
  while (N > 0) {
    if (index % 4 == 0) {
      stack.push(stack.pop() * N);
    } else if (index % 4 == 1) {
      const cur = stack.pop();
      stack.push(cur > 0 ? Math.floor(cur / N) : Math.ceil(cur / N));
    } else if (index % 4 == 2) {
      stack.push(N);
    } else {
      stack.push(-N);
    }
    index++;
    N--;
  }
  let sum = 0;
  stack.forEach(elment => {
    sum += elment;
  })
  return sum;
};