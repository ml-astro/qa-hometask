const {
  getRectanglePerimeter,
  getRectangleArea,
  getRectangleInfo,
} = require("../js/rectangle");

test("Should output rectangle perimeter: ", () => {
  expect(getRectanglePerimeter(10, 1)).toBe(22);
  expect(getRectanglePerimeter(5, 5)).toBe(20);
});

test("Should output rectangle area: ", () => {
  expect(getRectangleArea(2, 5)).toBe(10);
  expect(getRectangleArea(10, 10)).toBe(100);
});

test("Should output rectangle info: ", () => {
  expect(getRectangleInfo(4, 4)).toBe(
    console.log("The perimeter of a rectangle is 16 and the area is 16")
  );
  expect(getRectangleInfo(10, 5)).toBe(
    console.log("The perimeter of a rectangle is 30 and the area is 50")
  );
});
