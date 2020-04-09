class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        m, n = len(nums1), len(nums2)
        if m > n:
            nums1, nums2, m, n = nums2, nums1, n, m
        if n == 0:
            raise ValueError
        iMin, iMax, halflen = 0, m, int((m + n + 1) / 2)
        while iMin <= iMax:
            i = int((iMin + iMax) / 2)
            j = halflen - i
            if i < iMax and nums2[j - 1] > nums1[i]:
                iMin = i + 1
            elif i > iMin and nums1[i - 1] > nums2[j]:
                iMax = i - 1
            else:
                if i == 0:
                    maxLeft = nums2[j - 1]
                elif j == 0:
                    maxLeft = nums1[i - 1]
                else:
                    maxLeft = max(nums1[i - 1], nums2[j - 1])
                if (m + n) % 2 == 1:
                    return maxLeft
                if i == m:
                    minRight = nums2[j]
                elif j == n:
                    minRight = nums1[i]
                else:
                    minRight = min(nums1[i], nums2[j])
                return (minRight + maxLeft) / 2.0