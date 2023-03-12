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
  const n = +input();
  const numbers = Array.from({ length: n }, () => input().split(' ').map(Number));

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
      if (j === 0) {
        numbers[i][j] += numbers[i - 1][j];
      } else if (j === numbers[i].length - 1) {
        numbers[i][j] += numbers[i - 1][j - 1];
      } else {
        numbers[i][j] += Math.max(numbers[i - 1][j - 1], numbers[i - 1][j]);
      }
    }
  }

  console.log(Math.max(...numbers[n - 1]));
}
