class Solution:
    def findMin(self, nums: List[int]) -> int:
      if nums == []: return
      left, right, result = 0, len(nums) - 1, nums[0]
      while left <= right:
        mid = (left + right) // 2
        if nums[mid] >= nums[left]:
          result = min(result, nums[left])
          left = mid + 1
        else:
          result = min(result, nums[mid])
          right = mid - 1
      return result