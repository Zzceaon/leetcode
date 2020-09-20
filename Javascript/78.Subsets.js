// 递归 O(N * 2^N) O(N)
var subsets = function(nums) {
  const t = [], 
    ans = [],
    dfs = cur => {
      if (cur === nums.length) {
        ans.push(t.slice())
        return
      }
      t.push(nums[cur])
      dfs(cur + 1)
      t.pop(t.length - 1)
      dfs(cur + 1)
    }
  dfs(0)
  return ans
}

// 位运算 O(N * 2^N) O(N)
var subsets = function(nums) {
  const ans = [],
    n = nums.length
  for (let mask = 0; mask < (1 << n); mask++) {
    const t = []
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) t.push(nums[i])
    }
    ans.push(t)
  }
  return ans
}