import { describe, expect, it } from "vitest";

describe("Matrix Logic", () => {
  it("creates a valid matrix", () => {
    const matrix = Array.from({ length: 3 }, () =>
      Array(3).fill(0)
    );

    expect(matrix.length).toBe(3);
    expect(matrix[0].length).toBe(3);
  });

  it("contains only zeros initially", () => {
    const matrix = Array.from({ length: 2 }, () =>
      Array(2).fill(0)
    );

    expect(matrix.flat().every(v => v === 0)).toBe(true);
  });
});