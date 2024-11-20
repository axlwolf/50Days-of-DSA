/*
	You are given an array of Integers in which each subsequent value is not less than the previous value. 
	Write a function that takes this array as an input and returns a new array with the squares of each
	number sorted in ascending order.
*/

/**
 * Returns a new array with the squares of each	number sorted in ascending order.
 * @param {number[]} arr - The array of integers.
 * @returns {number[]} - A new array with the squares of each number sorted in ascending order.
 */
// export const sortedSquareArray = (arr) => {
//   const sortedArray = arr.sort((a, b) => a - b);
//   return sortedArray.map((x) => x * x);
// };

export const sortedSquareArray = (arr) =>
  arr.sort((a, b) => a - b).map((x) => x * x);
