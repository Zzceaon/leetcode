# class Solution:
#     def findKthLargest(self, nums: List[int], k: int) -> int:
#         return sorted(nums)[-k]

# heap(保留前k个最大的元素, 堆顶为所求) O(Nlogk) O(k)
# class Solution:
#     def findKthLargest(self, nums: List[int], k: int) -> int:
#         return heapq.nlargest(k, nums)[-1]

# 快速选择 O(N)->O(N^2) O(1)
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        def partition(left, right, pivot_index):
            pivot = nums[pivot_index]
            nums[pivot_index], nums[right] = nums[right], nums[pivot_index]
            store_index = left
            for i in range(left, right):
                if nums[i] < pivot:
                    nums[store_index], nums[i] = nums[i], nums[store_index]
                    store_index += 1
            nums[right], nums[store_index] = nums[store_index], nums[right]
            return store_index
        def select(left, right, k_smallest):
            if left == right:
                return nums[left]
            pivot_index = random.randint(left, right)
            pivot_index = partition(left, right, pivot_index)
            if k_smallest == pivot_index:
                return nums[k_smallest]
            elif k_smallest < pivot_index:
                return select(left, pivot_index - 1, k_smallest)
            else:
                return select(pivot_index + 1, right, k_smallest)
        return select(0, len(nums) - 1, len(nums) - k)
