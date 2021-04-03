// 深度优先搜索
const exist = (board, word) => {
  const m = board.length, n = board[0].length;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const visited = new Array(m);
  for (let i = 0; i < visited.length; i++) {
    visited[i] = new Array(n).fill(false);
  }
  const check = (i, j, s, k) => {
    if (board[i][j] != s.charAt(k)) {
      return false;
    } else if (k == s.length - 1) {
      return true;
    }
    visited[i][j] = true;
    let result = false;
    for (let [dx, dy] of directions) {
      let newi = i + dx, newj = j + dy;
      if (newi >= 0 && newi < m && newj >= 0 && newj < n) {
        if (!visited[newi][newj]) {
          const flag = check(newi, newj, s, k + 1);
          if (flag) {
            result = true;
            break;
          }
        }
      }
    }
    visited[i][j] = false;
    return result;
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const flag = check(i, j, word, 0);
      if (flag) {
        return true;
      }
    }
  }
  return false;
};