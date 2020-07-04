<!--
 * @Author: Zzceaon
 * @Date: 2020-07-04 20:26:57
 * @LastEditTime: 2020-07-04 20:27:38
 * @LastEditors: Please set LastEditors
 * @Description: python中[-1]、[:-1]、[::-1]、[n::-1]使用方法
 * @FilePath: \leetcode\Note\grammar\python\README.md
--> 
import numpy as np
a=np.random.rand(5)
print(a)
[ 0.64061262  0.8451399   0.965673    0.89256687  0.48518743]
 
print(a[-1]) ###取最后一个元素
[0.48518743]
 
print(a[:-1])  ### 除了最后一个取全部
[ 0.64061262  0.8451399   0.965673    0.89256687]
 
print(a[::-1]) ### 取从后向前（相反）的元素
[ 0.48518743  0.89256687  0.965673    0.8451399   0.64061262]
 
print(a[2::-1]) ### 取从下标为2的元素翻转读取
[ 0.965673  0.8451399   0.64061262]