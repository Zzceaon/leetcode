// 两次遍历 O(n) O(1)
class Solution {
  public void moveZeroes(int[] nums) {
    if (nums == null) return;
    int j = 0;
    for (int i = 0; i < nums.length; ++i) {
      if (nums[i] != 0) {
        nums[j++] = nums[i];
      }
    }
    for (int i = j; i < nums.length; ++i) {
      nums[i] = 0;
    }
  }
}

// 一次遍历 O(n) O(1)
class Solution {
  public void moveZeroes(int[] nums) {
    if (nums == null) return;
    int j = 0;
    for (int i = 0; i < nums.length; ++i) {
      if (nums[i] != 0) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j++] = temp;
      }
    }
  }
}