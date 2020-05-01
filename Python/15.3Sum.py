class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        result = []
        nums.sort()
        for i in range(n-2):
            if nums[i] + nums[i+1] + nums[i+2] > 0:
                break
            if nums[i] + nums[n-2] + nums[n-1] < 0:
                continue
            if 0 < i and nums[i] == nums[i-1]:
                continue
            l, r = i+1, n-1
            while l < r:
                tmp = nums[i] + nums[l] + nums[r]
                if tmp == 0:
                    result.append([nums[i], nums[l], nums[r]])
                    while l+1 < r and nums[l] == nums[l+1]:
                        l += 1
                    l += 1
                    while l < r-1 and nums[r] == nums[r-1]:
                        r -= 1
                    r -= 1
                elif tmp < 0:
                    l += 1
                else:
                    r -= 1
        return result