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
  const costs = Array.from({ length: N }, () => input().split(' ').map(Number));

  const acc = Array.from({ length: N }, () => [0, 0, 0]);
  acc[0] = costs[0];

  for (let i = 1; i < N; i++) {
    acc[i][0] = Math.min(acc[i - 1][1], acc[i - 1][2]) + costs[i][0];
    acc[i][1] = Math.min(acc[i - 1][0], acc[i - 1][2]) + costs[i][1];
    acc[i][2] = Math.min(acc[i - 1][0], acc[i - 1][1]) + costs[i][2];
  }
  console.log(Math.min(...acc[N - 1]));
}
