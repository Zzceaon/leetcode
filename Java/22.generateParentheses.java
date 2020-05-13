// DFS
class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        if (n == 0) {
            return result;
        }
        helpler(n, n, "", result);
        return result;
    }
    private void helpler(int l, int r, String item, List<String> result) {
        if (r < l) {
            return;
        }
        if (l == 0 && r == 0) {
            result.add(item);
        }
        if (l > 0) {
            helpler(l-1, r, item + '(', result);
        }
        if (r > 0) {
            helpler(l, r-1, item + ')', result);
        }
    }
}