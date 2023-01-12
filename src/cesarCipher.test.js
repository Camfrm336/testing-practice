const cesarCipher = require("./cesarCipher");

test("dog shifts to eph", () => {
  expect(cesarCipher("dog")).toBe("eph");
});

test("shift works with Z (zebra)", () => {
  expect(cesarCipher("zebra")).toBe("afcsb");
});

test("shift works with Z", () => {
  expect(cesarCipher("z")).toBe("a");
});
