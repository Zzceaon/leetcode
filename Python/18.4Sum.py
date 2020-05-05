class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        n, res = len(nums), []
        nums.sort()
        for i in range(n):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            if i + 3 < n - 1:
                if nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target:
                    break
            if i < n - 3:
                if nums[i] + nums[n - 1] + nums[n - 2] + nums[n - 3] < target:
                    continue
            for j in range(i + 1, n):
                if j > i + 1 and nums[j] == nums[j - 1]:
                    continue
                l, r = j + 1, n - 1
                while l < r:
                    tmp = nums[i] + nums[j] + nums[l] + nums[r]
                    if tmp == target:
                        res.append([nums[i], nums[j], nums[l], nums[r]])
                        while l < r and nums[l] == nums[l + 1]:
                            l += 1
                        while l < r and nums[r] == nums[r - 1]:
                            r -= 1
                        l += 1
                        r -= 1
                    elif tmp > target:
                        r -= 1
                    else:
                        l += 1
        return res