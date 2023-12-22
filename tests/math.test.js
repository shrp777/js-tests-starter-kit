const { describe, expect, test } = require("@jest/globals");

const { add } = require("../src/maths");

describe("Maths", () => {
  test("add(1,1) should equal 2", () => {
    expect(add(1, 1)).toEqual(2);
  });
  test("add(1) should throw an error", () => {
    expect(() => add(1)).toThrowError("There should be at least 2 parameters");
  });
  test("add('1','1') should equal 2", () => {
    expect(() => add("1", "1")).toThrow();
  });
  test("when params are not numbers, it should throw an error", () => {
    expect(() => add("A", "1")).toThrow();
  });
  test("Fetch API should return data", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");

    const data = await response.json();
    expect(data.length).toBeGreaterThan(0);
  });
});
