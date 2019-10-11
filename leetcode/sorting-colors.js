/*
 * Given an array with n objects colored red, white or blue, sort them in-place
 * so that objects of the same color are adjacent, with the colors in the order red, white and blue.
 * Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 * Input: [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
*/

const merge = (left, right) => {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const sortColors = arr => {
  // base
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.round(arr.length/2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(sortColors(left), sortColors(right));
};

// console.log(sortColors([2,0,2,1,1,0]));

const merge2 = (left, right) => {
  let result = [];

  while (left.length && right.length) {
    console.log('left', left, 'right', right);
    if (left[0] < right[0]) {
      // add first el
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left.slice()).concat(right.slice());
};

const mergeSort = array => {
  if (array.length < 2) {
    return array;
  }

  const middle = Math.round(array.length/2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge2(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([2,0,2,1,1,0]));
