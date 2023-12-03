import { expect, test } from "vitest";
import { readFile } from "../readFile";
import { evaluateLine, extractBalls, extractId, sumPossibleIds } from "./02_01";

test("Loads example input file into an array", async () => {
  const linesArray = await readFile("02_01_eg.txt");
  expect(linesArray[0]).toBe(
    "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"
  );
});

test("Will extract id to a number", () => {
  const id = extractId(
    "Game 52: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"
  );
  expect(id).toBe(52);
});

test("Will extract balls for a game", () => {
  const balls = extractBalls(" 6 red, 1 blue, 3 green");
  expect(balls).toStrictEqual({
    red: 6,
    green: 3,
    blue: 1,
  });
});

test("Will evaluate a possible line", () => {
  const id = evaluateLine(
    "Game 52: 6 red, 1 blue, 3 green; 13 blue, 1 red, 2 green"
  );
  expect(id).toBe(52);
});

test("Will evaluate a line with impossible first round", () => {
  const id = evaluateLine("Game 52: 6 red, 4 green, 15 blue; 7 red, 11 green");
  expect(id).toBe(0);
});

test("Will evaluate a line with impossible second round", () => {
  const id = evaluateLine(
    "Game 52: 6 red, 4 green, 14 blue; 7 red, 11 green, 15 blue"
  );
  expect(id).toBe(0);
});

test("Will return sum of all possible IDs in full file", async () => {
  const result = await sumPossibleIds("02_01.txt");
  expect(result).toBe(2879);
});
