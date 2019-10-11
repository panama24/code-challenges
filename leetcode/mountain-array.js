/*
 *Given an array A of integers, return true if and only if it is a valid mountain array.
 * Recall that A is a mountain array if and only if:

 * A.length >= 3
 * There exists some i with 0 < i < A.length - 1 such that:
 * A[0] < A[1] < ... A[i-1] < A[i]
 * A[i] > A[i+1] > ... > A[A.length - 1]
 */

var validMountainArray = function(A) {
  if (A.length < 3) { return false; }

  let left = 0, right = 0, peak = 0;

  // while A[i] greater than next and less than arr len, increment peak and left
  while (A[peak] < A[peak+1] && peak < A.length - 1) {
    left++;
    peak++;
  }

  // once we reach peak
  // while values are descending and still less than arr length
  // increment right
  while (A[peak] > A[peak+1] && peak < A.length) {
    right++;
    peak++;
  }

  // if either left or right are 0, it isn't a mountain arr
  // also check that we have traversed entire array
  return (left * right > 0) && peak === A.length -1;
}

var arr1 = [2, 1]; // --> false
var arr2 = [3, 5, 5] // --> false
var arr3 = [0, 3, 2, 1] // --> true
console.log(validMountainArray(arr1));
console.log(validMountainArray(arr2));
console.log(validMountainArray(arr3));
