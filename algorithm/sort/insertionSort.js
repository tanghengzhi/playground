function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > curr) {
        array[j + 1] = array[j];
      } else {
        array[j + 1] = curr;
        break;
      }
    }
    console.log(array);
  }

  return array;
}

array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

insertionSort(array);