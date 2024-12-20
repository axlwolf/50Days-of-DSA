export const sortedSquareArray = (arr) => {
  const sortedArray = arr.sort((a, b) => a - b);
  return sortedArray.map((x) => x * x);
};

module.exports = sortedSquareArray;
