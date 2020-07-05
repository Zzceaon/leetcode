// 递归 O(n) O(n)
class Solution {
  public void helper(char[] s, int left, int right) {
    if (left < right) {
      char tmp = s[left];
      s[left++] = s[right];
      s[right--] = tmp;
      helper(s, left, right);
    }
  }
  public void reverseString(char[] s) {
    helper(s, 0, s.length - 1);
  }
}

// 双指针 O(n) O(1)
class Solution {
  public void reverseString(char[] s) {
    int left = 0, right = s.length - 1;
    while (left < right) {
      char tmp = s[left];
      s[left++] = s[right];
      s[right--] = tmp;
    }
  }
}