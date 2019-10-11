/*
 * Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value.
 * And you need to output the maximum average value.
 * Example 1:
 * Input: [1,12,-5,-6,50,3], k = 4
 * Output: 12.75
 * Explanation: Maximum average is (12–5–6+50)/4 = 51/4 = 12.75
 */

// input = array
// output = int, 2-point decimal

const maxSubarray = (array, k) => {
  const limit = Math.round(array.length / 2);

  let res = [];
  for (var i = 0; i < limit; i++) {
    const nums = Array(k)
      .fill(null)
      .map((_, idx) => array[i+idx]);

    res.push(nums.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0));
  }

   return res.sort((a, b) => a-b).pop() / k;
};

console.log(maxSubarray([1,12,-5,-6,50,3,0], 4));
