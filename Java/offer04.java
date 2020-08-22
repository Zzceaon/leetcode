// 暴力 O(nm) O(1)
class Solution {
  public boolean findNumberIn2DArray(int[][] matrix, int target) {
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) return false;
    int rows = matrix.length, columns = matrix[0].length;
    for(int i = 0; i < rows; i++) {
      for (int j = 0; j < columns; j++) {
        if (matrix[i][j] == target) return true;
      }
    }
    return false;
  }
}

// 线性查找 O(n+m) O(1)
class Solution {
  public boolean findNumberIn2DArray(int[][] matrix, int target) {
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) return false;
    int rows = matrix.length, columns = matrix[0].length;
    int row = 0, column = columns - 1;
    while (row < rows && column >= 0) {
      int num = matrix[row][column];
      if (num == target) {
        return true;
      } else if (num > target) {
        column--;
      } else {
        row++;
      }
    }
    return false;
  }
}