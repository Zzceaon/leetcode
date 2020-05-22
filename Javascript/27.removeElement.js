// 双指针
var removeElement = function(nums, val) {
    let begin = 0, end = nums.length - 1;
    while (begin <= end) {
        if (nums[begin] == val) {
            nums[begin] = nums[end--];
        }
        else {
            begin++;
        }
    }
    return end + 1;
};