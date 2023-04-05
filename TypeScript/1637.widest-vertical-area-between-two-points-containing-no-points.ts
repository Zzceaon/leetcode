// 两点之间内部不包含任何点的最宽垂直面积的宽度，即所有点投影到横轴上后，求相邻的两个点的最大距离。可以先将输入的坐标按照横坐标排序，然后依次求出所有相邻点的横坐标距离，返回最大值。

function maxWidthOfVerticalArea(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0])
  let res = 0
  for (let i = 1; i < points.length; ++i) {
      res = Math.max(res, points[i][0] - points[i - 1][0])
  }
  return res
};

// 时间复杂度：O(nlogn)，其中 n 是输入数组的长度，排序消耗 O(nlogn) 时间复杂度。

// 空间复杂度：O(logn)，为排序的空间复杂度。