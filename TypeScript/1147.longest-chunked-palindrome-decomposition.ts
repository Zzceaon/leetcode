var longestDecomposition = function(text) {
  const n = text.length;
  let res = 0;
  let l = 0, r = n - 1;
  while (l <= r) {
      let len = 1;
      while (l + len - 1 < r - len + 1) {
          if (judge(text, l, r - len + 1, len)) {
              res += 2;
              break;
          }
          ++len;
      }
      if (l + len - 1 >= r - len + 1) {
          ++res;
      }
      l += len;
      r -= len;
  }
  return res;
}

const judge = (text, l1, l2, len) => {
  while (len > 0) {
      if (text[l1] !== text[l2]) {
          return false;
      }
      ++l1;
      ++l2;
      --len;
  }
  return true;
};
