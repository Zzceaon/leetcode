// heap(保留前k个最大的元素, 堆顶为所求) O(Nlogk) O(k)
// class Solution {
//   public int findKthLargest(int[] nums, int k) {
//       PriorityQueue<Integer> heap = new PriorityQueue<Integer>((n1, n2) -> n1 - n2);
//       for (int n : nums) {
//           heap.add(n);
//           if (heap.size() > k) {
//               heap.poll();
//           }
//       }
//       return heap.poll();
//   }
// }

// 快速选择 O(N)->O(N^2) O(1)
class Solution {
  int [] nums;
  public void swap(int a, int b) {
      int tmp = this.nums[a];
      this.nums[a] = this.nums[b];
      this.nums[b] = tmp;
  }
  public int partition(int left, int right, int pivot_index) {
      int pivot = this.nums[pivot_index];
      swap(pivot_index, right);
      int store_index = left;
      for (int i = left; i <= right; i++) {
          if (this.nums[i] < pivot) {
              swap(store_index, i);
              store_index++;
          }
      }
      swap(store_index, right);
      return store_index;
  }
  public int quickselect(int left, int right, int k_smallest) {
      if (left == right) return this.nums[left];
      Random random_nums = new Random();
      int pivot_index = left + random_nums.nextInt(right - left);
      pivot_index = partition(left, right, pivot_index);
      if (k_smallest == pivot_index) return this.nums[k_smallest];
      else if (k_smallest < pivot_index) return quickselect(left, pivot_index - 1, k_smallest);
      return quickselect(pivot_index + 1, right, k_smallest);
  }
  public int findKthLargest(int[] nums, int k) {
      this.nums = nums;
      int size = nums.length;
      return quickselect(0, size - 1, size - k);
  }
}