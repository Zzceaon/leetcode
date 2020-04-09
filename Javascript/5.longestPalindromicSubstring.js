var longestPalindrome = function(s) {
    let len = s.length;
    if (len < 2) {
        return s
    }
    dp = Array.from({length:len}).map(() => []);
    for (let i = 0; i < len; i++) {
        dp[i][i] = true;
    }
    let maxLen = 1;
    let start = 0;
    for (let j = 1; j < len; j++) {
        for (let i = 0; i < j; i++) {
            if (s[i] === s[j]) {
                if (j - i < 3) {
                    dp[i][j] = true;
                }
                else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
            }
            else {
                dp[i][j] = false;
            }
            if (dp[i][j]) {
                let curLen = j - i + 1;
                if (curLen > maxLen) {
                    maxLen = curLen;
                    start = i;
                }
            }
        }
    }
    return s.substring(start, start + maxLen);
};