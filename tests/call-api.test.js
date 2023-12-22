const { describe, expect, test } = require("@jest/globals");

const { call } = require("../src/api");

describe("call", () => {
  test("Fetch API should return data", async () => {
    const data = await call("https://jsonplaceholder.typicode.com/todos/");

    expect(data.length).toBeGreaterThan(0);
  });
  test("Fetch API should throw error when url is wrong formated", async () => {
    return expect(call("")).rejects.toThrowError("Can't fetch API");
  });
});
