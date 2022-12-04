import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8").trimEnd();
const array = input.split(/\r\n|\n/);

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZS";

const arrayOfDuplicates: string[][] = [];

array.forEach((val) => {
  const firstSection = val.slice(0, val.length / 2).split("");
  const secondSection = val.slice(val.length / 2, val.length).split("");

  const inBoth = [
    ...new Set(firstSection.filter((v: string) => secondSection.includes(v))),
  ];

  arrayOfDuplicates.push(inBoth);
});

const totals = arrayOfDuplicates
  .map((v) => v.flatMap((v) => alphabet.indexOf(v) + 1))
  .flat();

//Part 1
console.log(totals.reduce((acc, val) => acc + val));

let tempArray: string[] = [];
let tempCharArray: string[] = [];
let badges: string[] = [];

array.forEach((val) => {
  tempArray.push(val);

  if (tempArray.length === 3) {
    const splitTempArray = tempArray.map((arrayItem) => arrayItem.split(""));
    splitTempArray.forEach((splitVal) => {
      splitVal.forEach((char) => {
        if (!tempCharArray.includes(char)) {
          let count = 0;
          tempArray.map((val) => {
            if (val.includes(char)) {
              count += 1;
            }
          });
          if (count === 3) {
            badges.push(char);
            tempCharArray.push(char);
          }
        }
      });
    });
    tempCharArray = [];

    tempArray = [];
  }
});

const resultArray = badges.map((badge) => alphabet.indexOf(badge) + 1);
// Part 2
console.log(resultArray.reduce((a, v) => a + v));
