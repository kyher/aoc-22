import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8").trimEnd();

const splitInput = input
  .split("\n\n")
  .flatMap((val) => val.split("\n").map(Number));

let splitArray: number[] = [];
let tempArr: number[] = [];

splitInput.forEach((value) => {
  if (value != 0) {
    tempArr.push(value);
  }
  if (value == 0) {
    splitArray.push(tempArr.reduce((acc, val) => acc + val));
    tempArr = [];
  }
});

//Part 1 answer -
console.log(splitArray.sort((a, b) => b - a)[0]);

//Part 2 answer -
console.log(splitArray.slice(0, 3).reduce((acc, val) => acc + val));
