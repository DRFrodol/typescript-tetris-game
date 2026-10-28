import { describe, expect, it } from "vitest";

describe("Tetromino", () => {
  it("contains blocks", () => {
    const piece = [
      [1, 1],
      [1, 1]
    ];

    expect(piece.flat().length).toBeGreaterThan(0);
  });
});