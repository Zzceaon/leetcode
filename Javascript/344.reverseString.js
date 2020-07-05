// 递归 O(n) O(n)
var reverseString = function(s) {
  const reverse = (left, right) => {
    if (left < right) {
      [s[left], s[right]] = [s[right], s[left]];
      reverse(left + 1, right - 1);
    }
  }
  reverse(0, s.length - 1);
};

// 双指针 O(n) O(1)
var reverseString = function(s) {
  let i = 0, j = s.length - 1;
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
};