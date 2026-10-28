import { describe, expect, it } from "vitest";

describe("Score Calculation", () => {
  it("adds points correctly", () => {
    let score = 0;

    score += 100;
    score += 200;

    expect(score).toBe(300);
  });
});