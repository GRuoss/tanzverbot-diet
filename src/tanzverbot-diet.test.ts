import { calcDateOnDiet, Sex } from "./tanzverbot-diet";

test("calculates days to reach target weight for valid input (male)", () => {
  const result = calcDateOnDiet(60, 65, 1.75, 20, Sex.Male);
  expect(result).toBeGreaterThan(0);
});

test("throws error for target weight lower than current", () => {
  expect(() => calcDateOnDiet(70, 65, 1.8, 25, Sex.Female)).toThrow(
    /for gaining weight/,
  );
});

test("throws error if age or height are below threshold", () => {
  expect(() => calcDateOnDiet(50, 55, 1.4, 15, Sex.Female)).toThrow(
    /do not qualify/,
  );
});
