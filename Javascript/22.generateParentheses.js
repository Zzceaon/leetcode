// DFS
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 0) {
        return [];
    }
    let result = [];
    helpler(n, n, '', result);
    return result;
};
function helpler(l, r, item, result) {
    if (r < l) {
        return;
    }
    if (l ===0 && r === 0) {
        result.push(item);
    }
    if (l > 0) {
        helpler(l-1, r, item + '(', result);
    }
    if (r > 0) {
        helpler(l, r-1, item + ')', result);
    }
}