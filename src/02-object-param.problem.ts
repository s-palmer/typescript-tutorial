import { expect, it } from "vitest";

type ParamsType = {
  first: number;
  second: number;
}

interface ParamsTypeInterface {
  first: number;
  second: number
}

export const addTwoNumbers = (params: ParamsType) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
