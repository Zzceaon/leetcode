class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
      List<List<Integer>> res = new ArrayList<>();
      Arrays.sort(candidates);
      combo(res, candidates, target, new ArrayList<Integer>(), 0);
      return res;
    }
    public void combo(List<List<Integer>> res, int[] candidates, int target, List<Integer> tempList, int index) {
      if (target < 0) return;
      if (target == 0) res.add(new ArrayList<>(tempList));
      else {
        for (int i = index; i < candidates.length; i++) {
          tempList.add(candidates[i]);
          combo(res, candidates, target - candidates[i], tempList, i + 1);
          tempList.remove(tempList.size() - 1);
          while (i < candidates.length - 1 && candidates[i] == candidates[i + 1]) i++;
        }
      }
    }
}