# 快排
# class Solution:
#     def randomized_partition(self, nums, l, r):
#         pivot = random.randint(l, r)
#         nums[pivot], nums[r] = nums[r], nums[pivot]
#         i = l - 1
#         for j in range(l, r):
#             if nums[j] < nums[r]:
#                 i += 1
#                 nums[j], nums[i] = nums[i], nums[j]
#         i += 1
#         nums[i], nums[r] = nums[r], nums[i]
#         return i

#     def randomized_quicksort(self, nums, l, r):
#         if r - l <= 0:
#             return
#         mid = self.randomized_partition(nums, l, r)
#         self.randomized_quicksort(nums, l, mid - 1)
#         self.randomized_quicksort(nums, mid + 1, r)

#     def sortArray(self, nums: List[int]) -> List[int]:
#         self.randomized_quicksort(nums, 0, len(nums) - 1)
#         return nums

# Heap
# class Solution:
#     def max_heapify(self, heap, root, heap_len):
#         p = root
#         while p * 2 + 1 < heap_len:
#             l, r = p * 2 + 1, p * 2 + 2
#             if heap_len <= r or heap[r] < heap[l]:
#                 nex = l
#             else:
#                 nex = r
#             if heap[p] < heap[nex]:
#                 heap[p], heap[nex] = heap[nex], heap[p]
#                 p = nex
#             else:
#                 break
#     def build_heap(self, heap):
#         for i in range(len(heap) - 1, -1, -1):
#             self.max_heapify(heap, i, len(heap))
#     def heap_sort(self, nums):
#         self.build_heap(nums)
#         for i in range(len(nums) - 1, -1, -1):
#             nums[i], nums[0] = nums[0], nums[i]
#             self.max_heapify(nums, 0, i)
#     def sortArray(self, nums: List[int]) -> List[int]:
#         self.heap_sort(nums)
#         return nums

# Merge
