import { readFile } from "../readFile";

type Balls = {
  red: number;
  green: number;
  blue: number;
};

export const sumPossibleIds = async (filename: string): Promise<Number> => {
  const linesArray = await readFile(filename);
  let ballsPowerTotal: number = 0;
  linesArray.forEach((line) => {
    ballsPowerTotal += evaluateLine(line);
  });

  return ballsPowerTotal;
};

export const evaluateLine = (line: string) => {
  const balls: Balls = extractBalls(line);

  const ballsPower: number = balls.red * balls.green * balls.blue;

  return ballsPower;
};

export const extractBalls = (line: string): Balls => {
  let balls: Balls = { red: 0, green: 0, blue: 0 };

  const ballsSuffix = line.split(":");
  const rounds = ballsSuffix[1].split(";");
  rounds.forEach((round) => {
    const colours = round.split(",");
    colours.forEach((colour) => {
      // Could refactor, should refactor. Not gonna.
      if (colour.includes("red")) {
        const value = colour.trim().split(" ");
        if (Number(value[0]) > balls.red) balls.red = Number(value[0]);
      }
      if (colour.includes("green")) {
        const value = colour.trim().split(" ");
        if (Number(value[0]) > balls.green) balls.green = Number(value[0]);
      }
      if (colour.includes("blue")) {
        const value = colour.trim().split(" ");
        if (Number(value[0]) > balls.blue) balls.blue = Number(value[0]);
      }
    });
  });

  return balls;
};
