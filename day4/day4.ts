import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8").trimEnd();
const array = input.split(/\r\n|\n/);

const splitArray = array.map((v) => v.split(","));

const filteredArray = splitArray.filter((pair) => {
  const splitFirstPair = pair[0].split("-").map((v) => parseInt(v, 10));
  const splitSecondPair = pair[1].split("-").map((v) => parseInt(v, 10));

  if (
    (splitFirstPair[0] >= splitSecondPair[0] &&
      splitFirstPair[1] <= splitSecondPair[1]) ||
    (splitSecondPair[0] >= splitFirstPair[0] &&
      splitSecondPair[1] <= splitFirstPair[1])
  ) {
    return pair;
  }
});
//part 1
console.log(filteredArray.length);

const partTwoFilteredArray = splitArray.filter((pair) => {
  const splitFirstPair = pair[0].split("-").map((v) => parseInt(v, 10));
  const splitSecondPair = pair[1].split("-").map((v) => parseInt(v, 10));

  if (
    (splitFirstPair[0] >= splitSecondPair[0] &&
      splitFirstPair[0] <= splitSecondPair[1]) ||
    (splitFirstPair[1] >= splitSecondPair[0] &&
      splitFirstPair[1] <= splitSecondPair[1]) ||
    (splitSecondPair[0] >= splitFirstPair[0] &&
      splitSecondPair[1] <= splitFirstPair[1]) ||
    (splitSecondPair[1] >= splitFirstPair[0] &&
      splitSecondPair[1] <= splitFirstPair[1])
  ) {
    return pair;
  }
});
//part two
console.log(partTwoFilteredArray.length);
