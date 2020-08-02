# 两次遍历 O(n) O(1)
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        if not nums:  return 0
        j = 0
        for i in range(len(nums)):
          if nums[i]:
            nums[j] = nums[i]
            j += 1
        for i in range(j, len(nums)):
          nums[i] = 0


# 一次遍历 O(n) O(1)
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        if not nums: return 0
        j = 0
        for i in range(len(nums)):
          if nums[i] != 0:
            nums[i], nums[j] = nums[j], nums[i]
            j += 1