## Instructions

### Question 1:
- Monotonic Array -  You are given an array of Integers in which each subsequent value is not less than the previous value. Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order..

### Function Signature Question 1

```js
```
### Examples
```JS
```
### Constraints
### Hints
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
  const allOps = arr.sort((a, b) => a - b).map((x) => x * x);
  const result = sortedSquareArray(arr);

  console.log({ result, allOps });

  expect(result).toEqual(allOps);
});
```
