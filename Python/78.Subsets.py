# 迭代
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
      sets = [[]]
      for num in nums:
        sets += [set + [num] for set in sets]
      return sets

# 位运算
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
      N = len(nums)
      flags = [1 << i for i in range(N)]
      return [
        [nums[i] for i, flag in enumerate(flags) if flag & bits]
        for bits in range(2 ** N)
      ]