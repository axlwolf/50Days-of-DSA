## Instructions

#### Question 2:
- We buil a table of n rows (1-indexed). We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.
- For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
- Given two integers n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.

#### Function Signature Question 2

```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kthSymbolInGrammar = (n, k) => {}
```

#### Examples
```js
Example 1:

Input: n = 1, k = 1
Output: 0
Explanation: row 1: 0
Example 2:

Input: n = 2, k = 1
Output: 0
Explanation:
row 1: 0
row 2: 01
Example 3:

Input: n = 2, k = 2
Output: 1
Explanation:
row 1: 0
row 2: 01

```

#### Constraints
```
1 <= n <= 30
1 <= k <= 2n - 1

```

#### Hints
<details>
  <summary>Click For Hints</summary>


#### Claryfying questions
- Is it possible that n is given as 0? 
  No, n >= 0
- Can k be out of bounds? For eg, if n is 3, there will be 4 numbers, can k be given as 5?
  No, 1 <= k <= 2

</details>

#### Solutions
<details>
  <summary>Click For Solution</summary>

```js
 /**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
export const kthGrammar = (n, k) => {
  // Base case: first row, first symbol
  if (n === 1) return 0;

  // Find the parent of the current symbol
  let parent = kthGrammar(n - 1, Math.ceil(k / 2));

  // If k is odd, return the parent
  // If k is even, return the opposite of the parent
  if (k % 2 === 1) {
    return parent;
  } else {
    return 1 - parent;
  }
};
```
```js
/*
    (k-th symbol in Grammar)
    We build a table of n rows (1-indexed).
    We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row and
    replace each occurrence of 0 with 01, and each occurrence of 1 with 10.  For example, for n = 3,
    the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
    Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
export const kthGrammar = (n, k) => {
  // Base case: first row, first symbol
  if (n === 1 && k === 1) {
    return 0;
  }

  // Calculate the length of the previous row (n-1)
  let prevRowLength = Math.pow(2, n - 2);

  console.log({ prevRowLength });

  if (k <= prevRowLength) {
    // If k is in the first half of the current row, it corresponds to the same position in the previous row.
    return kthGrammar(n - 1, k);
  } else {
    // Otherwise, it corresponds to the opposite of the (k - prevRowLength)th symbol in the previous row.
    return 1 - kthGrammar(n - 1, k - prevRowLength);
  }
};
```
```js
var kthGrammar = function(n, k) {
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
```
</details>

#### Explanation
<details>
  <summary>Click For Explanation</summary>
  Explanation of the improved code and logic:

1. Base Case: The function first checks for the base case where n is 1 and k is 1. This corresponds to the very first symbol, which is always 0.

2. Calculating Previous Row Length: The prevRowLength is calculated as 2^(n-2). This is because the length of each row doubles with increasing n. The first row has a length of 2^0 = 1, the second 2^1 = 2, the third 2^2 = 4 and so on.

3. Recursive Logic:

* First Half: If k is less than or equal to prevRowLength, it means the kth symbol in the current row is the same as the kth symbol in the previous row. We recursively call kthGrammar(n - 1, k).
* Second Half: If k is greater than prevRowLength, it means the kth symbol in the current row is the opposite of the (k - prevRowLength)th symbol in the previous row. We recursively call 1 - kthGrammar(n - 1, k - prevRowLength). The 1 - part flips the 0 to a 1 or vice versa.

#### Key improvements:

* Efficiency: The recursive approach now directly calculates the relationship between the current row and the previous row without needing to generate the entire string. This significantly improves performance, especially for larger values of n.
* Clarity: The logic is more clearly expressed, making it easier to understand the recursive steps.
* Testability: The addition of Jest tests allows for easy verification of the function's correctness.
</details>

#### Test Cases
```js

// Jest tests
describe("kthGrammar", () => {
    it("should return 0 for n=1, k=1", () => {
        expect(kthGrammar(1, 1)).toBe(0);
    });

    it("should return 0 for n=2, k=1", () => {
        expect(kthGrammar(2, 1)).toBe(0);
    });

    it("should return 1 for n=2, k=2", () => {
        expect(kthGrammar(2, 2)).toBe(1);
    });

     it("should return 1 for n=4, k=5", () => {
        expect(kthGrammar(4,5)).toBe(1);
    });
});
```