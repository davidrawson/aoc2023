import { expect, test } from "vitest";
import { readFile } from "../readFile";
import { evaluateLine, extractBalls, sumPossibleIds } from "./02_02";

test("Loads example input file into an array", async () => {
  const linesArray = await readFile("02_02_eg.txt");
  expect(linesArray[0]).toBe(
    "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"
  );
});

test("Will extract balls for a game", () => {
  const balls = extractBalls(
    "Game 52: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"
  );
  expect(balls).toStrictEqual({
    red: 6,
    green: 3,
    blue: 2,
  });
});

test("Will evaluate a possible line", () => {
  const id = evaluateLine(
    "Game 52: 6 red, 1 blue, 3 green; 13 blue, 1 red, 2 green"
  );
  expect(id).toBe(234);
});

test("Will return sum of all ball powers in full file", async () => {
  const result = await sumPossibleIds("02_02.txt");
  expect(result).toBe(65122);
});
