function minTimeToVisitAllPoints(points: number[][]): number {
  let res: number = 0
  for (let i = 1; i < points.length; i++) {
      let path: number = Math.max(Math.abs(points[i][0] - points[i - 1][0]), Math.abs(points[i][1] - points[i - 1][1]))
      res += path
  }
  return res
};