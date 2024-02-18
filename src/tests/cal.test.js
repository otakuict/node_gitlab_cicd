import { Add, Sub } from "../myfunc/cal";

describe("testing cal ", () => {
  test("Plus Test", async () => {
    expect(Add(1, 2)).toBe(3);
  });
  test("Minus Test", async () => {
    expect(Sub(2, 1)).toBe(1);
  });
});
