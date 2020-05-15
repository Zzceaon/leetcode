// class Solution {
//     private int[] array;
//     private int[] original;
//     private Random rand = new Random();
//     private List<Integer> getArrayCopy() {
//         List<Integer> asList = new ArrayList<Integer>();
//         for (int i = 0; i < array.length; i++) {
//             asList.add(array[i]);
//         }
//         return asList;
//     }
//     public Solution(int[] nums) {
//         array = nums;
//         original = nums.clone();
//     }
//     public int[] reset() {
//         array = original;
//         original = original.clone();
//         return array;
//     }
//     public int[] shuffle() {
//         List<Integer> aux = getArrayCopy();
//         for (int i = 0; i < array.length; i++) {
//             int removeIdx = rand.nextInt(aux.size());
//             array[i] = aux.get(removeIdx);
//             aux.remove(removeIdx);
//         }
//         return array;
//     }
// }

// 洗牌算法
class Solution {
    private int[] array;
    private int[] original;
    Random rand = new Random();
    private int randRange(int min, int max) {
        return rand.nextInt(max - min) + min;
    }
    private void swapAt(int i, int j) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    public Solution(int[] nums) {
        array = nums;
        original = nums.clone();
    }
    public int[] reset() {
        array = original;
        original = original.clone();
        return original;
    }
    
    /** Returns a random shuffling of the array. */
    public int[] shuffle() {
        for (int i = 0; i < array.length; i++) {
            swapAt(i, randRange(i, array.length));
        }
        return array;
    }
}