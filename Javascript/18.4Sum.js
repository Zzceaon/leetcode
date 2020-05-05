/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let n = nums.length;
    if (nums == null || n < 4) {
        return [];
    }
    let num = nums.sort((a, b) => a - b);
    let res = []
    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && num[i] === num[i - 1]) {
            continue;
        }
        if (num[i] + num[i + 1] + num[i + 2] + num[i + 3] > target) {
            break;
        }
        if (num[i] + num[n - 1] + num[n - 2] + num[n - 3] < target) {
            continue;
        }
        for (let j = i + 1; j < n - 2; j++) {
            let left = j + 1;
            let right = n - 1;
            if (j > i + 1 && num[j] === num[j - 1]) {
                continue;
            }
            while (left < right) {
                if (num[i] + num[j] + num[left] + num[right] === target) {
                    res.push([num[i], num[j], num[left], num[right]]);
                    while (left < right && num[left] === num[left + 1]) {
                        left++;
                    }
                    while (left < right && num[right] === num[right - 1]) {
                        right--;
                    }
                    left++;
                    right--;
                }
                else {
                    num[i] + num[j] + num[left] + num[right] > target ? right-- : left++
                }
            }
        }
    }
    return res;
};