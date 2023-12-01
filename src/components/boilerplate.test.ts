import { expect, test } from "vitest";
import { testComponent } from "./boilerplate";

test("reads first line of input file", async () => {
  const linesArray = await testComponent("01_input.txt");
  expect(linesArray[0]).toBe("2832");
});
