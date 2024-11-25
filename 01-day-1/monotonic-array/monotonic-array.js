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
  const n = nums.length;
  if (n === 1) return true;

  let isInc = true;
  let isDec = true;

  for (let i = 1; i < n; i++) {
    if (!isInc && !isDec) {
      return false;
    }

    if (nums[i] < nums[i - 1]) {
      isInc = false;
    }
    if (nums[i] > nums[i - 1]) {
      isDec = false;
    }
  }

  return isInc || isDec;
};
