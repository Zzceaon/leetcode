var permute = function(nums) {
  let res = []
  function backtrack(nums, path = []) {
    if (path.length === nums.length) {
      res.push(path.slice(0))
      return
    }
    for (let n of nums) {
      if (path.includes(n)) continue
      path.push(n)
      backtrack(nums, path)
      path.pop()
    }
  }
  backtrack(nums)
  return res
}