import { expect, test } from "vitest";
import {
  extractDigits,
  replaceWordsWithNumbers,
  sumCalibrationValues,
} from "../01/01_02";
import { readFile } from "../readFile";

test("Loads input file into an array", async () => {
  const linesArray = await readFile("01_02_eg.txt");
  expect(linesArray[0]).toBe("two1nine");
});

test("Converts words to numbers", () => {
  const value = replaceWordsWithNumbers("4nineeightseven2");
  expect(value).toBe("49872");
});

test("Converts words to numbers with shared letters", () => {
  const value = replaceWordsWithNumbers("eightwothree");
  expect(value).toBe("823");
});

test("Will total digits from an example file", async () => {
  const totalOfValues = await sumCalibrationValues("01_02_eg.txt");
  expect(totalOfValues).toBe(281);
});

test("Will total digits from full file", async () => {
  const totalOfValues = await sumCalibrationValues("01_02.txt");
  expect(totalOfValues).toBe(54265);
});
