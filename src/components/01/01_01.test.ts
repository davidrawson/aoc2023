import { expect, test } from "vitest";
import { extractDigits, sumCalibrationValues } from "../01/01_01";
import { readFile } from "../readFile";

test("Loads input file into an array", async () => {
  const linesArray = await readFile("01_01_eg.txt");
  expect(linesArray[0]).toBe("1abc2");
});

test("Extracts digits from a line and concat", () => {
  const value = extractDigits("a1b2c3d4e5f");
  expect(value).toBe(15);
});

test("Will total digits from an example file", async () => {
  const totalOfValues = await sumCalibrationValues("01_01_eg.txt");
  expect(totalOfValues).toBe(142);
});

test("Will total digits from full file", async () => {
  const totalOfValues = await sumCalibrationValues("01_01.txt");
  expect(totalOfValues).toBe(54450);
});
