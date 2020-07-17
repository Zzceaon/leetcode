var longestCommonPrefix = function(strs) {
    let str1 = strs[0];
    let result = '';
    if (!strs.length) {
        return result;
    }
    for (let i = 0; i < str1.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (str1.charAt(i) !== strs[j].charAt(i)) {
                return result;
            }
        }
        result = result + str1.charAt(i);
    }
    return result;
};