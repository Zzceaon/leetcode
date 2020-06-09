## Heap
  1. Complete Binary Tree
  2. parent > children
    parent = (i - 1) / 2(向下取整)
    c1 = 2i + 1
    c2 = 2i + 2
## Merge
- O(nlogn)
## Bubble
  3 7 4 2 6 1

  [3 7] 4 2 6 1
  3 [7 4] 2 6 1
  3 4 [7 2] 6 1
  3 4 2 [7 6] 1
  3 4 2 6 [7 1]
  3 4 2 6 1 7
## Select
  3 [7] 4 2 6 [1]
  3 [1] 4 2 6 [7]
## Insert
  3 6 7 4 2 1 5
        i
  key = 4
  arr[i - 1] > key => arr[i] = arr[i - 1], i--
  arr[i] = key