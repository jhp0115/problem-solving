const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readlines = [];
let input;

rl.on('line', (line) => readlines.push(line));
rl.on('close', () => {
  const input_generator = input_generator_constructor(readlines);
  input = () => input_generator.next().value;
  main();
  process.exit();
});

function* input_generator_constructor(readlines) {
  for (const line of readlines) yield line;
}

// -----------[MAIN LOGIC]---------------------------------------
function main() {
  const N = +input();
  const positions = Array.from({ length: N }, () => input().split(' ').map(Number));
  const white_paper = Array.from({ length: 101 }, () => Array(101).fill(0));

  for (const [x, y] of positions) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) white_paper[y + i][x + j] = 1;
    }
  }

  const result = white_paper.reduce((sum, line) => sum + line.reduce((suml, numl) => suml + numl), 0);
  console.log(result);
}
