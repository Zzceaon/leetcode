<!--
 * @Author: Zzceaon
 * @Date: 2020-07-06 12:15:07
 * @LastEditTime: 2020-07-06 13:42:10
 * @LastEditors: Please set LastEditors
 * @Description: Queue
 * @FilePath: \leetcode\Note\grammar\Java\Queue.md
--> 
add      添加一个元素                如果队列已满，则抛出一IIIegaISlabEepeplia异常
offer    添加一个元素并返回true       如果队列已满，则返回false
put      添加一个元素                如果队列满，则阻塞
remove   移除并返回队列头部的元素     如果队列为空，则抛出一个NoSuchElementException异常
poll     移除并返问队列头部的元素     如果队列为空，则返回null
take     移除并返回队列头部的元素     如果队列为空，则阻塞
element  返回队列头部的元素          如果队列为空，则抛出一个NoSuchElementException异常
peek     返回队列头部的元素          如果队列为空，则返回null