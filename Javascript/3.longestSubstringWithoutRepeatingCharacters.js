/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        let set = new Set();
        set.add(s.charAt(i));
        for (let j = i + 1; j < s.length; j++) {
            if (set.has(s.charAt(j))) {
                break;
            }
            set.add(s.charAt(j));
        }
        res = Math.max(res, set.size);
    }
    return res;
};