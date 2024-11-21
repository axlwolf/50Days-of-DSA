import { sortedSquareArray } from "./sorted-square-array.js";

test("return true if the given array is monotonic, or false otherwise", () => {
  let arr = [-2, 1, 9, 10, 16];
  const allOps = arr.map((x) => x * x).sort((a, b) => a - b);
  const result = sortedSquareArray(arr);

  console.log({ result, allOps });

  expect(result).toEqual(allOps);
});
