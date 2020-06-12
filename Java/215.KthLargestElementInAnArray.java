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