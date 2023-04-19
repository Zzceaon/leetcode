// dp

function lengthOfLIS(nums: number[]): number {
  const dp: number[] = new Array(nums.length).fill(1)
  for (let i: number = 0; i < nums.length; i++) {
      for (let j: number = 0; j < i; j++) {
          if (nums[i] > nums[j]) {
              dp[i] = Math.max(dp[i], dp[j] + 1)
          }
      }
  }
  return Math.max(...dp)
};