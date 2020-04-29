class Solution:
    def romanToInt(self, s: str) -> int:
        numbers_map = {"I": 1, "V": 5,
                       "X": 10, "L": 50,
                       "C": 100, "D": 500,
                       "M": 1000}
        result = 0
        for i in range(len(s)):
            if i > 0 and numbers_map[s[i]] > numbers_map[s[i-1]]:
                result += numbers_map[s[i]] - 2 * numbers_map[s[i-1]]
            else:
                result += numbers_map[s[i]]
        return result