#include <stdio.h>

int findMax(int arr[], int n) {
  int max = arr[0];
  int pos = 0;
  int i;
  for (i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
      pos = i;
    }
  }
  return pos;
}

void selectionSort(int arr[], int n) {
  while (n > 1) {
    int pos = findMax(arr, n);
    int temp = arr[pos];
    arr[pos] = arr[n - 1];
    arr[n - 1] = temp;
    n--;
  }
}

int main() {
  int arr[] = {5, 8, 9, 7, 6, 1, 2, 4, 3};
  selectionSort(arr, 9);
  int i;
  for (i = 0; i < 9; i++) {
    printf("%d\n", arr[i]);
  }
  return 0;
}