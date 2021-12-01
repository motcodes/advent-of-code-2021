import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).split("\n");
  let counter = 1;
  for (let i = 1; i <= input.length; i++) {
    if (input[i] > input[i - 1]) {
      counter++;
    }
  }
  return counter;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
    .split("\n")
    .map((inp) => parseInt(inp));

  let counter = 0;
  for (let i = 0; i < input.length - 3; i++) {
    const sumA = input[i] + input[i + 1] + input[i + 2];
    const sumB = input[i + 1] + input[i + 2] + input[i + 3];

    if (sumB > sumA) {
      counter++;
    }
  }

  return counter;
};

run({
  part1: {
    tests: [
      // { input: ``, expected: "" },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // { input: ``, expected: "" },
    ],
    solution: part2,
  },
  trimTestInputs: true,
});
