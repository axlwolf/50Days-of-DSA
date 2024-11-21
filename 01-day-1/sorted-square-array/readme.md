## Instructions

### Question 1:
- Monotonic Array -  Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

### Function Signature Question 1

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = (nums) => {}
```
### Examples

```JS
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
```

Example 2:
```JS

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
```

### Constraints
- 1 <= nums.length <= 104
- 104 <= nums[i] <= 104
- nums is sorted in non-decreasing order.

### Hints
 Clarifying questions:
  - Are all numbers positive? No, they can be negative, positive or 0
  - Are the integers disctinct? Not necessarly
  - Can an empty array be passed? Yes

## Solutions
<details>
  <summary>Click For Solution</summary>

```JS
const sortedSquareArray = (arr) => {
  const sortedArray = arr.sort((a, b) => a - b);
  return sortedArray.map((x) => x * x);
};
```
</details>

### Explanation
<details>
  <summary>Click For Explanation</summary>

1. Input:

 * The function takes an array of numbers as input, arr.

2. Sorting:
```JS
arr.sort((a, b) => a - b);
```

* This line sorts the array arr in ascending order. The sort method uses a comparison function (a, b) => a - b to determine the order. If a is less than b, it returns a negative value, which means a should be placed before b in the sorted array. This will result in an array where the elements are ordered from the smallest to the largest.

3. Mapping:
```JS
  sortedArray.map((x) => x * x);
```

* After sorting the array, the map method is used to create a new array where each element is the square of the corresponding element in the sorted array. The map method applies the function (x) => x * x to each element x of the sortedArray.

4.Return Value:

 * The function returns the new array of squared values.
</details>

### Test Cases
```JS
test("return true if the given array is monotonic, or false otherwise", () => {
  const arr = [2, 1, 9, 16, 10];
  const allOps = arr.map((x) => x * x).sort((a, b) => a - b);
  const result = sortedSquareArray(arr);

  console.log({ result, allOps });

  expect(result).toEqual(allOps);
});
```
