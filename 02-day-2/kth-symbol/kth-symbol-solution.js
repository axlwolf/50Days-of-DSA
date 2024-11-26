// /**
//  * @param {number} n
//  * @param {number} k
//  * @return {number}
//  */
// export const kthGrammar = (n, k) => {
//   // Base case: first row, first symbol
//   if (n === 1) return 0;

//   // Find the parent of the current symbol
//   let parent = kthGrammar(n - 1, Math.ceil(k / 2));

//   // If k is odd, return the parent
//   // If k is even, return the opposite of the parent
//   if (k % 2 === 1) {
//     return parent;
//   } else {
//     return 1 - parent;
//   }
// };

// /*
//     (k-th symbol in Grammar)
//     We build a table of n rows (1-indexed).
//     We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row and
//     replace each occurrence of 0 with 01, and each occurrence of 1 with 10.  For example, for n = 3,
//     the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
//     Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.
// */
// /**
//  * @param {number} n
//  * @param {number} k
//  * @return {number}
//  */
// export const kthGrammar = (n, k) => {
//   // Base case: first row, first symbol
//   if (n === 1 && k === 1) {
//     return 0;
//   }

//   // Calculate the length of the previous row (n-1)
//   let prevRowLength = Math.pow(2, n - 2);

//   console.log({ prevRowLength });

//   if (k <= prevRowLength) {
//     // If k is in the first half of the current row, it corresponds to the same position in the previous row.
//     return kthGrammar(n - 1, k);
//   } else {
//     // Otherwise, it corresponds to the opposite of the (k - prevRowLength)th symbol in the previous row.
//     return 1 - kthGrammar(n - 1, k - prevRowLength);
//   }
// };

const kthGrammar = (n, k) => {
  if (n === 1) {
    return 0;
  }
  let length = Math.pow(2, n - 1);
  let mid = length / 2;
  if (k <= mid) {
    return kthGrammar(n - 1, k);
  } else {
    return 1 - kthGrammar(n - 1, k - mid);
  }
};
