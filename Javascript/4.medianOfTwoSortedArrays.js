var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]
    }
    const m = nums1.length;
    const n = nums2.length;
    const halfLen = Math.floor((m + n + 1) / 2);
    let min = 0;
    let max = m;
    while (min <= max) {
        const i = Math.floor((min + max) / 2);
        const j = halfLen - i;
        if (i < max && nums2[j - 1] > nums1[i]) {
            min = i + 1;
        }
        else if (i > min && nums1[i - 1] > nums2[j]) {
            max = i - 1;
        }
        else {
            let maxLeft, minRight;
            if (i === 0) {
                maxLeft = nums2[j - 1];
            }
            else if (j === 0) {
                maxLeft = nums1[i - 1];
            }
            else {
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }
            if (i === m) {
                minRight = nums2[j];
            }
            else if (j === n) {
                minRight = nums1[i];
            }
            else {
                minRight = Math.min(nums1[i], nums2[j]);
            }
            return (m + n) % 2 ? maxLeft : (minRight + maxLeft) / 2;
        }
    }
    return 0;
};