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
    const consoleSpy = jest.spyOn(console, 'log');
    getRectangleInfo(3, 2);
    expect(consoleSpy).toHaveBeenCalledWith(`The perimeter of a rectangle is 10 and the area is 6`
)})
