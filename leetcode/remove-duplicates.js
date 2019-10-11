/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/
var removeDuplicates = function(nums) {
    let j;
    for (var i = 0; i < nums.length; i++) {
        j = i + 1;
        while (j < nums.length && nums[j] === nums[i]) {
            j++;
        }

        nums.splice(i+1, j - (i+1));
    }
    return nums.length
};

const nums = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(nums);
