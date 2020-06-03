// 快排
function partition(nums, left, right) {
    let pivot = left;
    [nums[pivot], nums[right]] = [nums[right], nums[pivot]];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (nums[j] < nums[right]) {
            i++;
            [nums[j], nums[i]] = [nums[i], nums[j]];
        }
    }
    i++;
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
}
function quickSort(nums, left, right) {
    if ((right - left) <= 0) {
        return;
    }
    let mid = partition(nums, left, right);
    quickSort(nums, left, mid - 1);
    quickSort(nums, mid + 1, right);
}
var sortArray = function(nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;
};