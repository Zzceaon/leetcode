# DFS
# class Solution:
#     def generateParenthesis(self, n: int) -> List[str]:
#         if n == 0:
#             return[]
#         result = []
#         self.helpler(0, 0, n, '', result)
#         return result
#     def helpler(self, l, r, n, item, result):
#         if l == n and r == n:
#             result.append(item)
#         if l < r:
#             return
#         if l < n:
#             self.helpler(l+1, r, n, item + '(', result)
#         if r < n:
#             self.helpler(l, r+1, n, item + ')', result)

# DFS
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        if n == 0:
            return[]
        result = []
        self.helpler(n, n, '', result)
        return result
    def helpler(self, l, r, item, result):
        if r < l:
            return
        if l == 0 and r == 0:
            result.append(item)
        if l > 0:
            self.helpler(l-1, r, item + '(', result)
        if r > 0:
            self.helpler(l, r-1, item + ')', result)