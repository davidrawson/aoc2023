import { readFile } from "./readFile";

export const testComponent = async (filename: string): Promise<string[]> => {
  const linesArray = await readFile(filename);

  linesArray.forEach((line) => {
    // console.log(line);
  });

  return linesArray;
};
