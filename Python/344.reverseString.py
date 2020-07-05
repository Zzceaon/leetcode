# 递归 O(n) O(n)
class Solution:
    def reverseString(self, s: List[str]) -> None:
        def hepler(left, right):
          if (left < right):
            s[left], s[right] = s[right], s[left]
            hepler(left + 1, right - 1)
        hepler(0, len(s) - 1)

# 双指针 O(n) O(1)
class Solution:
    def reverseString(self, s: List[str]) -> None:
        left, right = 0, len(s) - 1
        while left < right:
          s[left], s[right] = s[right], s[left]
          left, right = left + 1, right - 1