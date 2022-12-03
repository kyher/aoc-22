import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8").trimEnd();

enum OpponentMoves {
  Rock = "A",
  Paper = "B",
  Scissors = "C",
}

enum ResponseMoves {
  Rock = "X",
  Paper = "Y",
  Scissors = "Z",
}

enum ResponseStrategy {
  Lose = "X",
  Draw = "Y",
  Win = "Z",
}

enum GameScores {
  Win = 6,
  Draw = 3,
  Lose = 0,
}

enum OptionScores {
  Rock = 1,
  Paper = 2,
  Scissors = 3,
}

const array = input.split(/\r\n|\n/);

const getScore = (val: string) => {
  const splitString = val.split(" ");

  switch (splitString[0]) {
    case OpponentMoves.Rock:
      if (splitString[1] === ResponseMoves.Rock) {
        return GameScores.Draw + OptionScores.Rock;
      }
      if (splitString[1] === ResponseMoves.Paper) {
        return GameScores.Win + OptionScores.Paper;
      }
      if (splitString[1] === ResponseMoves.Scissors) {
        return GameScores.Lose + OptionScores.Scissors;
      }
      return 0;

    case OpponentMoves.Paper:
      if (splitString[1] === ResponseMoves.Rock) {
        return GameScores.Lose + OptionScores.Rock;
      }
      if (splitString[1] === ResponseMoves.Paper) {
        return GameScores.Draw + OptionScores.Paper;
      }
      if (splitString[1] === ResponseMoves.Scissors) {
        return GameScores.Win + OptionScores.Scissors;
      }
      return 0;

    case OpponentMoves.Scissors:
      if (splitString[1] === ResponseMoves.Rock) {
        return GameScores.Win + OptionScores.Rock;
      }
      if (splitString[1] === ResponseMoves.Paper) {
        return GameScores.Lose + OptionScores.Paper;
      }
      if (splitString[1] === ResponseMoves.Scissors) {
        return GameScores.Draw + OptionScores.Scissors;
      }
      return 0;

    default:
      return 0;
  }
};

const getStrategyScore = (val: string) => {
  const splitString = val.split(" ");

  switch (splitString[0]) {
    case OpponentMoves.Rock:
      if (splitString[1] === ResponseStrategy.Win) {
        return GameScores.Win + OptionScores.Paper;
      }
      if (splitString[1] === ResponseStrategy.Draw) {
        return GameScores.Draw + OptionScores.Rock;
      }
      if (splitString[1] === ResponseStrategy.Lose) {
        return GameScores.Lose + OptionScores.Scissors;
      }
      return 0;

    case OpponentMoves.Paper:
      if (splitString[1] === ResponseStrategy.Win) {
        return GameScores.Win + OptionScores.Scissors;
      }
      if (splitString[1] === ResponseStrategy.Draw) {
        return GameScores.Draw + OptionScores.Paper;
      }
      if (splitString[1] === ResponseStrategy.Lose) {
        return GameScores.Lose + OptionScores.Rock;
      }
      return 0;

    case OpponentMoves.Scissors:
      if (splitString[1] === ResponseStrategy.Win) {
        return GameScores.Win + OptionScores.Rock;
      }
      if (splitString[1] === ResponseStrategy.Draw) {
        return GameScores.Draw + OptionScores.Scissors;
      }
      if (splitString[1] === ResponseStrategy.Lose) {
        return GameScores.Lose + OptionScores.Paper;
      }
      return 0;

    default:
      return 0;
  }
};

const arrayOfScores = array.map((v) => getScore(v));
const arrayOfStrategyScores = array.map((v) => getStrategyScore(v));

//Part 1
console.log(arrayOfScores.reduce((acc, val) => acc + val));
//Part 2
console.log(arrayOfStrategyScores.reduce((acc, val) => acc + val));
