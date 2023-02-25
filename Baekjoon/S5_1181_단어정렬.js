const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readlines = [];
let input; // same as python's.

rl.on("line", function (line) {
  readlines.push(line);
});
rl.on("close", function () {
  const input_generator = input_generator_constructor(readlines);
  input = () => {
    return input_generator.next().value;
  };
  main();
  process.exit();
});

function* input_generator_constructor(readlines) {
  for (const line of readlines) {
    yield line;
  }
}

// -----------[MAIN LOGIC]---------------------------------------
function main() {
  const N = input();
  const strings_set = new Set();

  for (let i = 0; i < N; i++) {
    strings_set.add(input());
  }

  [...strings_set]
    .sort((a, b) => {
      if (a.length === b.length) {
        return a < b ? -1 : 1;
      } else {
        return a.length - b.length;
      }
    })
    .forEach((str) => console.log(str));
}
