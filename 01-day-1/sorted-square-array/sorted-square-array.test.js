import { sortedSquareArray } from "./sorted-square-array.js";

test("return true if the given array is monotonic, or false otherwise", () => {
  const arr = [2, 1, 9, 16, 10];
  const allOps = arr.sort((a, b) => a - b).map((x) => x * x);
  const result = sortedSquareArray(arr);

  console.log({ result, allOps });

  expect(result).toEqual(allOps);
});
