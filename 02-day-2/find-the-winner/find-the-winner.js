/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 * T: O(n^2) , S: O(n)
 */
export const findTheWinner = (n, k) => {
  //n = 3, arr[1,2,3]
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  const helper = (arr, startIndex) => {
    //console.log({ arr });
    const length = arr.length;
    // Base case
    if (length === 1) return arr[0];

    // Recursive case
    let indexToRemove = (startIndex + k - 1) % length;
    arr.splice(indexToRemove, 1);

    // console.log({
    //   indexToRemove,
    //   arr,
    //   length,
    //   recHelper: helper(arr, indexToRemove),
    // });

    return helper(arr, indexToRemove);
  };

  return helper(arr, 0);
};
