import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8").trimEnd();
const array = input.split(/\r\n|\n/);

const startingArray = array.filter((v) => v.startsWith("["));
const instructions = array.filter((v) => v.startsWith("move"));

const splitStartingArray = startingArray.map((v) =>
  v.match(/.{1,3}/g)?.map((v) => v.replace("[", "").replace("]", "").trim())
);

function transpose(a: any) {
  return a[0].map(function (_: any, c: any) {
    return a.map(function (r: any) {
      return r[c] ?? "";
    });
  });
}

const transposedArr = transpose(splitStartingArray);

let finalStartingArray: string[][] = transposedArr.filter((arr: string[]) => {
  if (arr?.every((val) => val === "")) {
    return null;
  }
  return arr;
});

instructions.forEach((instruction) => {
  const itemsToBeMoved = instruction.split(" ").at(1);
  const fromLocation = instruction.split(" ").at(3);
  const toLocation = instruction.split(" ").at(5);

  if (fromLocation && itemsToBeMoved && toLocation) {
    const itemCount = parseInt(itemsToBeMoved, 10);
    const from = parseInt(fromLocation, 10) - 1;
    const to = parseInt(toLocation, 10) - 1;

    for (let i = 0; i < itemCount; i++) {
      const lastString = finalStartingArray[to].lastIndexOf("");
      const firstFromValue =
        finalStartingArray[from].find((v) => v != "") ?? "";

      if (lastString > -1) {
        finalStartingArray[to][lastString] = firstFromValue;
      } else {
        finalStartingArray[to] = [firstFromValue, ...finalStartingArray[to]];
      }

      finalStartingArray[from][
        finalStartingArray[from].findIndex((v) => v != "")
      ] = "";
    }
  }
});

//Part 1
console.log(finalStartingArray.map((arr) => arr.find((v) => v != "")));

const secondTransposedArr = transpose(splitStartingArray);

let secondStartingArray: string[][] = secondTransposedArr.filter(
  (arr: string[]) => {
    if (arr?.every((val) => val === "")) {
      return null;
    }
    return arr;
  }
);

instructions.forEach((instruction) => {
  const itemsToBeMoved = instruction.split(" ").at(1);
  const fromLocation = instruction.split(" ").at(3);
  const toLocation = instruction.split(" ").at(5);

  if (fromLocation && itemsToBeMoved && toLocation) {
    const itemCount = parseInt(itemsToBeMoved, 10);
    const from = parseInt(fromLocation, 10) - 1;
    const to = parseInt(toLocation, 10) - 1;

    const lastString = secondStartingArray[to].lastIndexOf("");

    const firstFromIndex =
      secondStartingArray[from].findIndex((v) => v != "") ?? "";

    const slice = secondStartingArray[from].slice(
      firstFromIndex,
      firstFromIndex + itemCount
    );

    secondStartingArray[to].splice(lastString + 1, 0, ...slice);

    secondStartingArray[from].splice(firstFromIndex, itemCount);
  }
});

//Part 2
console.log(secondStartingArray.map((arr) => arr.find((v) => v != "")));
