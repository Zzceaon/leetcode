'''
@Author: Zzceaon
@Date: 2020-07-08 14:46:21
@LastEditTime: 2020-07-08 15:16:28
@LastEditors: Please set LastEditors
@Description: 递归(二分)快速排序
@FilePath: \leetcode\sort.py
'''
def f(nums):
  if len(nums) <= 1: return nums
  p = nums[len(nums) // 2]
  left = [x for x in nums if x < p]
  middle = [x for x in nums if x == p]
  right = [x for x in nums if x > p]
  return f(left) + middle + f(right)
r1 = f([3, 6, 8, 10, 3, 1, 2])
print(r1)
r2 = f([8, 7, 6, 5, 4, 3,])
print(r2)