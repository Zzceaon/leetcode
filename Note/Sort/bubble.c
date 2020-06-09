#include <stdio.h>

void bubble(int arr[], int n) {
  int i;
  int temp;
  for (i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
}

void bubbleSort(int arr[], int n) {
  int i;
  for (i = n; i >= 1; i--) {
    bubble(arr, i);
  }
}

int main () {
  int arr[] = {6, 5, 1, 2, 3, 9, 8, 4, 7};
  int i;
  bubbleSort(arr, 9);
  for (i = 0; i< 9; i++) {
    printf("%d\n", arr[i]);
  }
  return 0;
}