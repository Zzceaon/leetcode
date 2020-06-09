#include <stdio.h>

void insert(int arr[], int n) {
  int key = arr[n];
  int i = n;
  while (arr[i - 1] > key) {
    arr[i] = arr[i - 1];
    i--;
    if (i == 0) {
      break;
    }
  }
  arr[i] = key;
}

void insertSort(int arr[], int n) {
  int i;
  for (i = 1; i < n; i++) {
    insert(arr, i);
  }
}

int main() {
  int arr[] = {9, 1, 2, 3, 6, 5, 7, 8, 4};
  int i;
  insertSort(arr, 9);
  for (i = 0; i< 9; i++) {
    printf("%d\n", arr[i]);
  }
  return 0;
}