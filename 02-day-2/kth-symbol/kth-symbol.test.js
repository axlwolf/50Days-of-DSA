import { kthGrammar } from "./kth-symbol.js";

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
    expect(kthGrammar(4, 5)).toBe(1);
  });

  it("should return 1 for n=4, k=8", () => {
    expect(kthGrammar(4, 8)).toBe(1);
  });
});
