/*Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.
*/
var plusOne = function(digits) {
  const len = digits.length - 1;

  let i, j, carry, sum = 0;
  for (i = len; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
      digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};
const c = [6,1,4,5,3,9,0,1,9];
const d = [9];
console.log(plusOne(c));
console.log(plusOne(d));
