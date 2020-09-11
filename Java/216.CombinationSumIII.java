// 回溯
class Solution {
  public List<List<Integer>> combinationSum3(int k, int n) {
    List<List<Integer>> res = new ArrayList<>();
    dfs(res, new ArrayList<>(), k, 1, n);
    return res;
  }
  private void dfs(List<List<Integer>> res, List<Integer> list, int k, int start, int n) {
    if (list.size() == k || n <= 0) {
      if (list.size() == k && n == 0) {
        res.add(new ArrayList<>(list));
        return;
      }
    }
    for (int i = start; i <= 9; i++) {
      list.add(i);
      dfs(res, list, k, i + 1, n - i);
      list.remove(list.size() - 1);
    }
  }
}