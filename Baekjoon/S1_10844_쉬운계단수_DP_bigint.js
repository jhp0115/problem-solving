const filePath =
  process.env.PWD !== '/workspace/node-backend/problem-solving' ? '/dev/stdin' : './input.txt';
const readlines = require('fs').readFileSync(filePath).toString().trim().split('\n');
const generator = input_generator_constructor(readlines);
const input = () => generator.next().value;
function* input_generator_constructor(readlines) {
  for (const line of readlines) yield line;
}
main();

// -----------[MAIN LOGIC]---------------------------------------
function main() {
  const N = +input();
  const dp = Array.from({ length: 10 }, () => Array(100).fill(0n));
  for (let r = 1; r <= 9; r++) dp[r][0] = 1n;

  for (let col = 1; col <= N - 1; col++) {
    for (let row = 0; row <= 9; row++) {
      dp[row][col] += row >= 1 ? dp[row - 1][col - 1] : 0n;
      dp[row][col] += row <= 8 ? dp[row + 1][col - 1] : 0n;
    }
  }

  const sum_of_column = dp.map((row) => row[N - 1]).reduce((acc, val) => acc + val);
  console.log(Number(sum_of_column % 1_000_000_000n));
}
