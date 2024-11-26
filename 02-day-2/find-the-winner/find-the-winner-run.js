import { findTheWinner } from "./find-the-winner.js";
import { findTheWinner2 } from "./find-the-winner-solution.js";

const n = 5;
const k = 3;

const result = findTheWinner(n, k);
const result2 = findTheWinner2(n, k);

console.log({ result, k, n });
console.log({ result2, k, n });
