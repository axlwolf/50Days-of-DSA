## Instructions

#### Question 2:
- Monotonic Array - An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone increasing if all its elements from left to right are non-decreasing. An array is monotone decreasing if all its elements from left to right are non-increasing. Given an integer array return true if the given array is monotonic, or false otherwise.

#### Function Signature Question 2

```js
const isMonotonic = (array) => {
  // Your code here
};
```

#### Examples
```js
Example 1:

Input: nums = [1,2,2,3]
Output: true
Example 2:

Input: nums = [6,5,4,4]
Output: true
Example 3:

Input: nums = [1,3,2]
Output: false
```

#### Constraints
```
1. `1 <= array.length <= 10^5`
2. `-10^5 <= array[i] <= 10^5`
```

#### Hints
<details>
  <summary>Click For Hints</summary>
1. Try checking the array in a single pass to determine if it is monotonic.
2. You can use boolean flags to track whether the array is increasing or decreasing.

#### Claryfying questions
- Is an empty array monotonic? Yes
- Is the array with only one integer monotonic? Yes
</details>

#### Solutions
<details>
  <summary>Click For Solution</summary>

```js
const isMonotonic = (array) => {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      isDecreasing = false;
    }
    if (array[i] < array[i - 1]) {
      isIncreasing = false;
    }
  }

  return isIncreasing || isDecreasing;
};
```
</details>

#### Explanation
<details>
  <summary>Click For Explanation</summary>
  The function `isMonotonic` checks if the array is either entirely non-increasing or non-decreasing. It uses two boolean flags, `isIncreasing` and `isDecreasing`, initialized to `true`. As it iterates through the array, it adjusts these flags based on the comparison between consecutive elements. Finally, it returns `true` if either flag remains `true`, indicating that the array is monotonic.
</details>

#### Test Cases
```js
test("return true if the given array is monotonic, or false otherwise", () => {
  expect(isMonotonic([1, 2, 2, 3])).toBe(true);
  expect(isMonotonic([6, 5, 4, 4])).toBe(true);
  expect(isMonotonic([1, 3, 2])).toBe(false);
  expect(isMonotonic([1, 1, 1])).toBe(true);
});
```