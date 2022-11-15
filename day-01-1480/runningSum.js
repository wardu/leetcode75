/**Given an array nums. We define a running sum of an
 * array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 *
 *
 * @param {number[]} nums
 * @return {number[]}
 *
 *
 */
var runningSum = function (nums) {
  for (i = nums.length - 1; i >= 0; i--) {
    for (j = 0; j < i; j++) {
      nums[i] = nums[i] + nums[j];
    }
  }
  return nums;
};

module.exports = runningSum;
