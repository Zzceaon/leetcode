// class Solution {
//     public String longestCommonPrefix(String[] strs) {
//         int n = strs.length;
//         if (n == 0) {
//             return "";
//         }
//         Arrays.sort(strs);
//         String first = strs[0];
//         String last = strs[n - 1];
//         StringBuffer sb = new StringBuffer();
//         int limit = Math.min(first.length(), last.length());
//         for (int i = 0; i < limit; i++) {
//             if (first.charAt(i) == last.charAt(i)) {
//                 sb.append(first.charAt(i));
//             }
//             else {
//                 break;
//             }
//         }
//         return sb.toString();
//     }
// }

// class Solution {
//     public String longestCommonPrefix(String[] strs) {
//         if (strs.length == 0) return "";
//         String prefix = strs[0];
//         for (int i = 1; i < strs.length; i++) {
//             while (strs[i].indexOf(prefix) != 0) {
//                 prefix = prefix.substring(0, prefix.length() - 1);
//                 if (prefix.isEmpty()) return "";
//             }
//         }
//         return prefix;
//     }
// }

class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) return "";
        for (int i = 0; i < strs[0].length(); i++) {
            char c = strs[0].charAt(i);
            for (int j = 1; j < strs.length; j++) {
                if (i == strs[j].length() || strs[j].charAt(i) != c) {
                    return strs[0].substring(0, i);
                }
            }
        }
        return strs[0];
    }
}