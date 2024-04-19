"use server";

const fs = require("fs");
const csv = require("csv-parser");

export async function fetchIndexPointOptions(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const indexPointItems: string[] = [];

    fs.createReadStream("./public/indexPoints.csv")
      .pipe(csv())
      .on("data", (data: any) => indexPointItems.push(data["Vocabulário"]))
      .on("end", () => {
        resolve(indexPointItems);
      })
      .on("error", (error: any) => {
        reject(error);
      });
  });
}
