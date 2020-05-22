// 快慢双指针
// class Solution {
//     public int removeElement(int[] nums, int val) {
//         int i = 0;
//         for (int j = 0; j < nums.length; j++) {
//             if (nums[j] != val) {
//                 nums[i] = nums[j];
//                 i++;
//             }
//         }
//         return i;
//     }
// }

// 双指针
class Solution {
    public int removeElement(int[] nums, int val) {
        int begin = 0, end = nums.length - 1;
        while (begin <= end) {
            if (nums[begin] == val) {
                nums[begin] = nums[end--];
            }
            else {
                begin++;
            }
        }
        return end + 1;
    }
}