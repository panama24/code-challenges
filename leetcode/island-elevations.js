/*
Google phone interview question from 10/21
The matrix represents an entire island.
Each vertex in matrix represents a location on the island.
The number is the elevation at that location.
Determine from which locations rain could flow out to the ocean.
Water can flow from higher to lower elevations. Assume the ocean has an
elevation of 0.
*/

const I = [
  [1, 4, 3, 3, -1],
  [2, 7, 1, 0, 4],
  [5, 3, -1, 6, 2],
  [2, 4, 9, 3, 1],
];

const check = (A, i, j) => {
  if (i - 1 < 0 || j - 1 < 0 || i + 1 > A.length - 1 || j + 1 > A[0].length - 1) {
    if (A[i][j] >= 0) {
      return true;
    }
  }

  if (i - 1 >= 0) {
    if (A[i][j] < A[i - 1][j]) {
      return false;
    }
    check(A, i - 1, j);
  }

  if (i + 1 < A.length - 1) {
    if (A[i][j] < A[i + 1][j]) {
      return false;
    }
    check(A, i + 1, j);
  }

  if (j - 1 >= 0) {
    if (A[i][j] < A[i][j - 1]) {
      return false;
    }
    check(A, i, j - 1);
  }

  if (j + 1 < A[0].length - 1) {
    if (A[i][j] < A[i][j + 1]) {
      return false;
    }
    check(A, i, j + 1);
  }

  return true;
};

const islandElevation = A => {
  let locations = [];
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A[0].length; j++) {
      if (check(A, i, j)) {
        locations.push(A[i][j]);
      }
    }
  }
  return locations;
};

islandElevation(I);

// [1, 4, 3, 3, 2, 7, 4, 5, 6, 2, 2, 4, 9, 3, 1];