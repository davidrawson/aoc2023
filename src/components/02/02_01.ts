import { readFile } from "../readFile";

type Balls = {
  red: number;
  green: number;
  blue: number;
};

export const sumPossibleIds = async (filename: string): Promise<Number> => {
  const linesArray = await readFile(filename);
  let possibleIdsTotal: number = 0;
  linesArray.forEach((line) => {
    possibleIdsTotal += evaluateLine(line);
  });

  return possibleIdsTotal;
};

export const evaluateLine = (line: string) => {
  const red = 12;
  const green = 13;
  const blue = 14;
  let runningTotal: number = 0;
  let possibleLine: boolean = true;

  const id: number = extractId(line);
  const ballsSuffix = line.split(":");
  const rounds = ballsSuffix[1].split(";");
  rounds.forEach((round) => {
    const balls: Balls = extractBalls(round);
    if (balls.red > red || balls.green > green || balls.blue > blue) {
      possibleLine = false;
    }
  });
  if (possibleLine) runningTotal += id;

  return runningTotal;
};

export const extractId = (line: string) => {
  const idPrefix = line.split(":");
  const id = Number(idPrefix[0].split(" ")[1]);

  return id;
};

export const extractBalls = (round: string): Balls => {
  let balls: Balls = { red: 0, green: 0, blue: 0 };

  const colours = round.split(",");
  colours.forEach((colour) => {
    // Could refactor, should refactor. Not gonna.
    if (colour.includes("red")) {
      const value = colour.trim().split(" ");
      balls.red += Number(value[0]);
    }
    if (colour.includes("green")) {
      const value = colour.trim().split(" ");
      balls.green += Number(value[0]);
    }
    if (colour.includes("blue")) {
      const value = colour.trim().split(" ");
      balls.blue += Number(value[0]);
    }
  });

  return balls;
};
