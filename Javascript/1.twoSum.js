//两数之和
// 两数之和
// nums [2, 7, 11, 15]
// target = 9
// 两个整数 i + j = 9

//暴力解法 o(n^2)
// var twoSum; //undefined 类型未定义
// twoSum = function(nums, target) {
//     let arr =[];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             // 不能自己加自己
//             if (nums[i] + nums[j] === target) {
//                 arr = [i, j];
//                 return arr;
//             }
//         }
//     }
// }

// o(n)
//声明const必须赋值,之后不能改变值
const twoSum = function(nums, target) {
    let map = {}; //对象字面量
    // forEach(值, 下标):遍历
    nums.forEach(function(e, i) {
        // console.log(e, i);
        map[e] = i; //map[]
    })
    // console.log(map[7]);
    for (let i = 0; i < nums.length; i++) {
        let j = map[target - nums[i]];
        if (j && j !== i) {
            return [i, j];
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 9));

// const twoSum = function(nums, target) {
//     let obj = {};
//     for (let i = 0; i < nums.length; i++) {
//         const item = nums[i];
//         if (obj[item] >= 0) {
//             return [obj[item], i]
//         }
//         else {
//             obj[target - item] = i;
//         }
//     }
// };