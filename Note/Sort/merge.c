#include <stdio.h>

void merge(int arr[], int L, int M, int R) {
  int LEFT_SIZE = M - L;
  int RIGHT_SIZE = R - M + 1;
  int left[LEFT_SIZE];
  int right[RIGHT_SIZE];
  int i;
  // 1.Fill in the left sub array
  // L        M     R
  // 2 8 9 10 4 5 6 7
  for (i = L; i < M; i++) {
    left[i - L] = arr[i];
  }
  // 2.Fill in the right sub array
  // L        M     R
  // 2 8 9 10 4 5 6 7
  for (i = M; i<= R; i++) {
    left[i - M] = arr[i];
  }
  // 3.Merge into the original array
  int j; int k;
  i = 0; j = 0; k = L;
  while (i < LEFT_SIZE && j < RIGHT_SIZE) {
    if (left[i] < right[j]) {
      arr[k] = left[i];
      i++;
      k++;
    } else {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
  while (i < LEFT_SIZE) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < RIGHT_SIZE) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

void mergeSort(int arr[], int L, int R) {
  if (L == R) {
    return;
  } else {
    int M = (L + R) / 2;
    // L     M       R
    // 0 1 2 3 4 5 6 7
    mergeSort(arr, L, M);
    mergeSort(arr, M + 1, R);
    // L        M     R
    // 6 8 10 9 4 5 2 7
    merge(arr, L, M + 1, R);
  }
}

int main() {
  int arr[] = {6, 8, 10, 9, 4, 5, 2, 7};
  int L = 0;
  int R = 7;
  mergeSort(arr, L, R);
  int i;
  for (i = 0; i <= R; i++) {
    printf("%d\n", arr[i]);
  }
}