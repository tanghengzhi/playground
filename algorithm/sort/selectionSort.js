function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    console.log(array);
  }
  
  return array;
}

array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

selectionSort(array);