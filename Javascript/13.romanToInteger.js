/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let numbers_map = {"I": 1, "V": 5,
                       "X": 10, "L": 50,
                       "C": 100, "D": 500,
                       "M": 1000};
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (i > 0 && numbers_map[s[i]] > numbers_map[s[i-1]]) {
            result += numbers_map[s[i]] - 2 * numbers_map[s[i-1]];
        }
        else {
            result += numbers_map[s[i]];
        }
    }
    return result;
};