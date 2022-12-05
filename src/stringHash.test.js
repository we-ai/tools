import { stringToIngeterHash } from "./stringHash";

describe("stringToIngeterHash", () => {
  it("should return a number", () => {
    expect(typeof stringToIngeterHash("hello world")).toBe("number");
  });

  it("should return a number of given digits", () => {
    expect(stringToIngeterHash("hello world", 9)).toBeLessThan(1000000000);
    expect(stringToIngeterHash("hello world", 9)).toBeGreaterThan(99999999);
  });

  it("should return the same number for the same string", () => {
    expect(stringToIngeterHash("hello world")).toBe(stringToIngeterHash("hello world"));
  });

  it("should return a different number for a different string", () => {
    expect(stringToIngeterHash("hello world")).not.toBe(stringToIngeterHash("hello world!"));
  });
});

