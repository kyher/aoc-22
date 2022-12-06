import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8").trimEnd().split("");

function hasDuplicates(array: any[]) {
  return new Set(array).size !== array.length;
}

//Part 1
const numberOfChars = 4;
console.log(
  input.findIndex((v, i) => {
    const tempArr: string[] = [];

    const nextIndex = input[i + 1];
    const secondIndex = input[i + 2];
    const thirdIndex = input[i + 3];

    tempArr.push(v);
    tempArr.push(nextIndex);
    tempArr.push(secondIndex);
    tempArr.push(thirdIndex);

    if (!hasDuplicates(tempArr)) {
      return v;
    }
  }) + numberOfChars
);

//Part 2
const numberOfCharsMsg = 14;
console.log(
  input.findIndex((v, i) => {
    const tempArr: string[] = [];

    for (let z = 0; z < numberOfCharsMsg; z++) {
      tempArr.push(input[i + z]);
    }

    if (!hasDuplicates(tempArr)) {
      return v;
    }
  }) + numberOfCharsMsg
);
