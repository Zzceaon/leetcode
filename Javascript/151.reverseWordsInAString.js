// 正则
var reverseWords = function(s) {
  let str = s.trim();
  return str.split(/\s+/).reverse().join(' ');
}