<!--
 * @Author: Zzceaon
 * @Date: 2020-07-16 00:20:19
 * @LastEditTime: 2020-07-16 00:22:40
 * @LastEditors: Please set LastEditors
 * @Description: PriorityQueue
 * @FilePath: \leetcode\Note\grammar\Java\PriorityQueue.md
--> 
## PriorityQueue（优先队列），一个基于优先级堆的无界优先级队列。
- 实际上是一个堆（不指定Comparator时默认为最小堆），通过传入自定义的Comparator函数可以实现大顶堆。
- PriorityQueue的常用方法有：poll(),offer(Object),size(),peek()等。
  - 插入方法（offer()、poll()、remove() 、add() 方法）时间复杂度为O(log(n))
  - remove(Object) 和 contains(Object) 时间复杂度为O(n)
  - 检索方法（peek、element 和 size）时间复杂度为常量。