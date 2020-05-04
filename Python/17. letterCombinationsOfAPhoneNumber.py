# DFS
# class Solution:
#     def letterCombinations(self, digits: str) -> List[str]:
#         if len(digits) == 0:
#             return []
#         digit_map = {
#             0: "0",
#             1: "1",
#             2: "abc",
#             3: "def",
#             4: "ghi",
#             5: "jkl",
#             6: "mno",
#             7: "pqrs",
#             8: "tuv",
#             9: "wxyz"
#         }
#         result = [""]
#         for digit in digits:
#             digit_list = []
#             for ch in digit_map[int(digit)]:
#                 for str in result:
#                     digit_list.append(str + ch)
#             result = digit_list
#         return result

# BFS
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        phone = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z']
        }
        def backtrack(combination, next_digits):
            if len(next_digits) == 0:
                output.append(combination)
            else:
                for letter in phone[next_digits[0]]:
                    backtrack(combination + letter, next_digits[1:])
        output = []
        if digits:
            backtrack("", digits)
        return output