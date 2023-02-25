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
  const [N, M] = input().split(" ");

  // Array.prototype.includes보다 Set.prototype.has가 더 빠르다..!
  const never_heards = new Set();
  const never_seens = new Set();
  const both = [];

  for (let i = 0; i < N; i++) {
    never_heards.add(input());
  }

  for (let i = 0; i < M; i++) {
    never_seens.add(input());
  }

  never_heards.forEach((one) => {
    if (never_seens.has(one)) {
      both.push(one);
    }
  });

  console.log(both.length);
  both.sort().forEach((one) => console.log(one));
}
