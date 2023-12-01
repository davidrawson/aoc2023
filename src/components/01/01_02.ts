import { readFile } from "../readFile";

export const sumCalibrationValues = async (
  filename: string
): Promise<Number> => {
  const linesArray = await readFile(filename);
  let calibrationTotal = 0;
  linesArray.forEach((line) => {
    calibrationTotal += extractDigits(line);
  });

  return calibrationTotal;
};

export const extractDigits = (line: string) => {
  let stringValue: string = "";
  const digits = replaceWordsWithNumbers(line);
  stringValue = stringValue.concat(digits[0], digits[digits.length - 1]);

  return Number(stringValue);
};

export const replaceWordsWithNumbers = (line: string) => {
  let values = regexExtract(line);

  const numberDictionary = [
    ["one", "1"],
    ["two", "2"],
    ["three", "3"],
    ["four", "4"],
    ["five", "5"],
    ["six", "6"],
    ["seven", "7"],
    ["eight", "8"],
    ["nine", "9"],
  ];

  numberDictionary.forEach(([key, number]) => {
    values = values.map((value) => {
      if (value === key) {
        return number;
      }
      return value;
    });
  });
  
  return values.join("");
};

export const regexExtract = (line: string) => {
  const regex = /(?=([0-9]|one|two|three|four|five|six|seven|eight|nine))/g;
  const found = [...line.matchAll(regex)];

  return found.flat();
};
