/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let ans = nums[0] + nums[1] + nums[n - 1];
    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] == nums[ i - 1]) continue;
        let l = i + 1,r = n - 1;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (Math.abs(target - sum) < Math.abs(target - ans)) ans = sum;
            if (sum === target) return target;
            else if (sum < target) l++;
            else r--;
        }
    }
    return ans;
};