<!--
 * @Author: Zzceaon
 * @Date: 2020-07-06 13:49:18
 * @LastEditTime: 2020-07-06 13:53:27
 * @LastEditors: Please set LastEditors
 * @Description: length&length()&size()的区别
 * @FilePath: \leetcode\Note\grammar\Java\length()&length&size().md
--> 
length——数组的属性
length()——String的方法
size()——集合的方法

int arr[] = new int{1,2,3}
数组用length属性取得长度
int lenArr = arr.length;  此处lenArr=3

length()方法：用于获取字符串长度。
String str = "Hello World Java";
int lenStr = str.length();  此处lenStr=16

size()方法：用于获取泛型集合有多少个元素。
Collection是整个类集之中单值保存的最大父接口，所以使用时需要用具体子类实例化
Collection<String> col = new ArrayList<String>();
col.add("Hello");
col.add("World");
col.add("Java");
类集框架用size()方法取元素个数
int sizeCol = col.size();  此处sizeCol=3