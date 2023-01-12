const reverse = require("./reverse");

test("cat reverse to tac", () => {
  expect(reverse("hello")).toBe("olleh");
});
test("equal reverse to lauqe", () => {
  expect(reverse("equal")).toBe("lauqe");
});
test("light reverse to thgil", () => {
  expect(reverse("light")).toBe("thgil");
});
