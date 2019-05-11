function mergeSort(array) {
  if (array.length > 1) {
    let array1 = array.slice(0, array.length / 2);
    let array2 = array.slice(array.length / 2, array.length);

    console.log(array1, array2);

    return merge(mergeSort(array1), mergeSort(array2));
  } else {
    return array;
  }
}

function merge(array1, array2) {
  let [i, j] = [0, 0];
  let array = [];

  while (i + j < array1.length + array2.length) {
    if ((array1[i] < array2[j] && i < array1.length) || j == array2.length) {
      array[i + j] = array1[i];
      i++;
    } else {
      array[i + j] = array2[j];
      j++;
    }
  }

  console.log(array);

  return array;
}

array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

mergeSort(array);