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

//export const sortedSquareArray = (arr) => {
//   let newArray = [];
//   arr.forEach((x) => {
//     console.log({ x });
//     newArray.push(Math.abs(x) * Math.abs(x));
//   });
//   return newArray.sort((a, b) => a - b);
// };
// export const sortedSquareArray = (arr) =>
//   arr.map((x) => x * x).sort((a, b) => a - b);

//BruteForce TC = O(logn) SC = O(n)
// export const sortedSquareArray = (arr) => {
//   let newArray = new Array(arr.length).fill(0); // initialize an empty array filled with 0

//   for (let i = 0; i < arr.length; i++) {
//     newArray[i] = arr[i] * arr[i];
//   }
//   // Ex. -4 1 3
//   newArray.sort((a, b) => a - b);
//   return newArray;
// };

// Divide
// TC = O(n) - Traversing the array 1 time
// SC = O(n) - Creating a new array
export const sortedSquareArray = (arr) => {
  let newArray = new Array(arr.length).fill(0); // initialize an empty array filled with 0
  let pleft = 0;
  let pright = arr.length - 1;
  //   console.log({ pleft, pright });

  for (let i = arr.length - 1; i >= 0; i--) {
    // Create the leftSquare and rightSquare valus
    const leftSquare = Math.pow(arr[pleft], 2);
    const rightSquare = Math.pow(arr[pright], 2);
    //console.log({ leftSquare, rightSquare });
    if (leftSquare > rightSquare) {
      newArray[i] = leftSquare;
      pleft++;
      //console.log({ newArray, leftSquare, rightSquare });
    } else {
      newArray[i] = rightSquare;
      pright--;
      // console.log({ newArray, leftSquare, rightSquare });
    }
  }

  return newArray;
};
