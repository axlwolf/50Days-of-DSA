export const findTheWinner2 = (n, k) => {
  const josephus = (n) => {
    // Base case
    if (n === 1) return 0;
    // Recursive case
    return (josephus(n - 1) + k) % n;
  };
  return josephus(n) + 1;
};
