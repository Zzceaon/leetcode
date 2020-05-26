// class Solution {
//     public int strStr(String haystack, String needle) {
//         int L = needle.length(), n = haystack.length();
//         for (int i = 0; i < n - L + 1; i++) {
//             if (haystack.substring(i, i + L).equals(needle)) {
//                 return i;
//             }
//         }
//         return -1;
//     }
// }

// 双指针
class Solution {
    public int strStr(String haystack, String needle) {
        int L = needle.length(), n = haystack.length();
        if (L == 0) return 0;
        int pn = 0;
        while (pn < n - L + 1) {
            while (pn < n - L + 1 && haystack.charAt(pn) != needle.charAt(0)) pn++;
            int curr_len = 0, pL = 0;
            while (pL < L && pn < n && haystack.charAt(pn) == needle.charAt(pL)) {
                pn++;
                pL++;
                curr_len++;
            }
            if (curr_len == L) return pn - L;
            pn = pn - curr_len + 1;
        }
        return -1;
    }
}