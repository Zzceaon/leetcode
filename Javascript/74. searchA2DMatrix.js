// 两次二分查找
// 时间复杂度：O(\log m+\log n)=O(\log mn)O(logm+logn)=O(logmn)，其中 mm 和 nn 分别是矩阵的行数和列数
// 空间复杂度：O(1)O(1)
const searchMatrix = function(matrix, target) {
  const rowIndex = binarySearchFirstColumn(matrix, target);
  if (rowIndex < 0) {
    return false;
  }
  return binarySearchRow(matrix[rowIndex], target);
};
const binarySearchFirstColumn = (matrix, target) => {
  let low = -1, high = matrix.length - 1;
  while (low < high) {
    const mid = Math.floor((high - low + 1) / 2) + low;
    if (matrix[mid][0] <= target) {
      low = mid;
    }else {
      high = mid - 1;
    }
  }
  return low;
}
const binarySearchRow = (row, target) => {
  let low = 0, high = row.length - 1;
  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low;
    if (row[mid] == target) {
      return true;
    } else if (row[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}