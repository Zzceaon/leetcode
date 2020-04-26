/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(p == '' || !p) {
        return s == '';
    }
    let match = (s && (s.charAt(0) == p.charAt(0) || p.charAt(0) == '.'));
    if (p.length >= 2 && p.charAt(1) == '*') {
        return isMatch(s, p.substring(2)) || (match && isMatch(s.substring(1), p))
    }
    else {
        return match && isMatch(s.substring(1), p.substring(1))
    }
};