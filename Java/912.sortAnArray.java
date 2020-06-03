// 快排
class Solution {
    private int partition(int[] nums, int left, int right) {
        int pivot = left;
        int temp = nums[pivot];
        nums[pivot] = nums[right];
        nums[right] = temp;
        int i = left - 1;
        for (int j = left; j < right; j++) {
            if (nums[j] < nums[right]) {
                i++;
                int p = nums[j];
                nums[j] = nums[i];
                nums[i] = p;
            }
        }
        i++;
        int tmp = nums[i];
        nums[i] = nums[right];
        nums[right] = tmp;
        return i;
    }
    private void quickSort(int[] nums, int left, int right) {
        if ((right - left) <= 0) {
            return;
        }
        int mid = partition(nums, left, right);
        quickSort(nums, left, mid - 1);
        quickSort(nums, mid + 1, right);
    }
    public int[] sortArray(int[] nums) {
        quickSort(nums, 0, nums.length - 1);
        return nums;
    }
}