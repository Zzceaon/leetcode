class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l,start, n = 0, 0, len(s)
        maps = {}
        for i in range(n):
            start = max(start, maps.get(s[i], -1)+1)
            l = max(l, i - start +1)
            maps[s[i]] = i
        return l