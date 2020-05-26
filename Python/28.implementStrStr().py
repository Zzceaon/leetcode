# class Solution:
#     def strStr(self, haystack: str, needle: str) -> int:
#         for i in range(len(haystack) - len(needle) + 1):
#             if haystack[i: i + len(needle)] == needle:
#                 return i
#         return -1

# 双指针
# class Solution:
#     def strStr(self, haystack: str, needle: str) -> int:
#         L, n = len(needle), len(haystack)
#         if L == 0:
#             return 0
#         pn = 0
#         while pn < n - L + 1:
#             while pn < n - L + 1 and haystack[pn] != needle[0]:
#                 pn += 1
#             curr_len = pL = 0
#             while pL < L and pn < n and haystack[pn] == needle[pL]:
#                 pn += 1
#                 pL += 1
#                 curr_len += 1
#             if curr_len == L:
#                 return pn - L
#             pn = pn - curr_len + 1
#         return -1