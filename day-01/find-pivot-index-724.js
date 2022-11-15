/**
 * Given an array of integers nums, calculate the pivot index of this array.
 * The pivot index is the index where the sum of all the numbers strictly to the left of
 * the index is equal to the sum of all the numbers strictly to the index's right.
 * If the index is on the left edge of the array, then the left sum is 0 because
 * there are no elements to the left. This also applies to the right edge of the array.
 * Return the leftmost pivot index. If no such index exists, return -1.
 *
 *
 *
 *
 * @param {number[]} nums
 * @return {number}
 */

const pivotIndex = (nums) => {
  let leftSlice = 0;

  let summedNums = nums.reduce((accumulator, curr) => accumulator + curr);

  for (let i = 0; i < nums.length; i++) {
    if (summedNums - leftSlice - nums[i] === leftSlice) {
      return i;
    }
    leftSlice += nums[i];
  }
  return -1;
};

module.exports = pivotIndex;
