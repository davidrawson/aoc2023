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

export const extractDigits = (line: String) => {
  const digits: string[] = [];
  let stringValue: string = "";
  const chars = line.split("");
  chars.forEach((char) => {
    if (char >= "0" && char <= "9") digits.push(char);
  });
  stringValue = stringValue.concat(digits[0], digits[digits.length - 1]);

  return Number(stringValue);
};
