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
      .map((_, idx) => array[i + idx]);

    res.push(nums.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0));
  }

  return res.sort((a, b) => a - b).pop() / k;
};

console.log(maxSubarray([1, 12, -5, -6, 50, 3, 0], 4));

/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

*/
var maxSubArray2 = function (nums) {
  if (!nums.length) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  let max = nums[0];

  for (var i = 0; i < nums.length; i++) {
    let j, sum = nums[i];
    if (sum > max) {
      max = sum;
    }
    for (j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}