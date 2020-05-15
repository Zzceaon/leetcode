// 洗牌算法(从后往前)
// var Solution = function(nums) {
//     this.arr = nums;
// };
// Solution.prototype.reset = function() {
//     return this.arr;
// };
// Solution.prototype.shuffle = function() {
//     let nums = [...this.arr];
//     let n = nums.length - 1;
//     while(n >= 0) {
//         let index = parseInt(Math.random() * (n+1));
//         [nums[index], nums[n]] = [nums[n], nums[index]];
//         n--;
//     }
//     return nums;
// };

// 洗牌算法(从前往后)
var Solution = function(nums) {
    this.arr = nums;
};
Solution.prototype.reset = function() {
    return this.arr;
};
Solution.prototype.shuffle = function() {
    let nums = [...this.arr];
    let i = 0;
    function getRandom(start, end) {
        return parseInt(start + Math.random() * (end - start))
    }
    while (i < nums.length - 1) {
        let index = getRandom(i, nums.length);
        [nums[index], nums[i]] = [nums[i], nums[index]];
        i++;
    }
    return nums;
};