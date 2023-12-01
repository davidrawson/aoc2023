import { promises as fsPromises } from "fs";

export const readFile = async (inputFilename: string): Promise<string[]> => {
  try {
    const contents = await fsPromises.readFile(
      `./src/data/${inputFilename}`,
      "utf-8"
    );

    const lines = contents.split(/\r?\n/);

    return lines;
  } catch (err) {
    console.log(err);
  }
  return [];
};
