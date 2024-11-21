/**
 * An array is monotonic if it is either monotone increasing or monotone decreasing.
 * An array is monotone increasing if all its elements from left to right are non-decreasing.
 * An array is monotone decreasing if all  its elements from left to right are non-increasing.
 * Given an integer array return true if the given array is monotonic, or false otherwise.
 */
/****************************************************************
 * @param {number[]} array - The array of integers to be checked.
 * @returns {boolean} - Returns true if the array is monotonic,
 *                      or false otherwise.
 ***************************************************************/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const isMonotonic = (nums) => {
  if (nums.length <= 1) return true;
  let isIncreasing = true;
  let isDecreasing = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) isDecreasing = false;
    if (nums[i] < nums[i - 1]) isIncreasing = false;
    if (!isIncreasing && !isDecreasing) return false;
  }
  return isIncreasing || isDecreasing;
};
