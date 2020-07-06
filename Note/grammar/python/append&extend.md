<!--
 * @Author: Zzceaon
 * @Date: 2020-07-05 23:10:19
 * @LastEditTime: 2020-07-05 23:12:13
 * @LastEditors: Please set LastEditors
 * @Description: append和extend的区别
 * @FilePath: \leetcode\Note\grammar\python\append&extend.md
--> 
A = [1, 2, 3, 4]
B = [5, 6, 7, 8]
A.append(B) => [1, 2, 3, 4, [5, 6, 7, 8]]
A.extend(B) => [1, 2, 3, 4, 5, 6, 7, 8]
A + B => [1, 2, 3, 4, 5, 6, 7, 8]
A += B => [1, 2, 3, 4, 5, 6, 7, 8]