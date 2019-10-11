const mergesort = array => {
  // base
  if (array.length < 2) {
    return array;
  }

  const middle = Math.round(array.length/2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergesort(left), mergesort(right), array);
};

const merge = (left, right, array) => {
  // indices i for left, j for right, k for array
  let i = 0, j = 0, k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      array[k] = left[i];
      i++;
    } else {
      array[k] = right[j];
      j++;
    }
    k++;
  }

  // either left or right may have some left over
  while (i < left.length) {
    array[k] = left[i];
    i++; k++;
  }

  while (j < right.length) {
    array[k] = right[j];
    j++; k++;
  }
  return array;
};

console.log(mergesort([1, 9, 3, 5, 4, 7]));
