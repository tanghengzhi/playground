function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivot = left;
    let pivotValue = array[left];

    for (let i = left + 1; i <= right; i++) {
      if (array[i] < pivotValue) {
        pivot++;
        [array[i], array[pivot]] = [array[pivot], array[i]];
      }
    }

    [array[left], array[pivot]] = [array[pivot], array[left]];

    quickSort(array, left, pivot - 1);
    quickSort(array, pivot + 1, right);
  }
  
  console.log(array);
  
  return array;
}

array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

quickSort(array);