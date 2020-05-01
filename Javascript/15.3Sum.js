/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = [];
    const len = nums.length;
    if (nums == null || len < 3) return ans;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] + nums[i + 1] + nums[i + 2]> 0) break;
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let l = i + 1;
        let r = len - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum == 0) {
                ans.push([nums[i], nums[l], nums[r]]);
                while (l + 1 < r && nums[l] == nums[l + 1]) l++;
                while (l < r - 1 && nums[r] == nums[r - 1]) r--;
                l++;
                r--;
            }
            else if (sum < 0) l++;
            else r--;
        }
    }
    return ans;
};