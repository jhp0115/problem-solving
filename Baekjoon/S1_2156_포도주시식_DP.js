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
  const n = +input();
  const amounts = Array.from({ length: n }, () => +input());

  if (n === 1) {
    console.log(amounts[0]);
    return;
  }
  if (n === 2) {
    console.log(amounts[0] + amounts[1]);
    return;
  }

  const dp = Array(n).fill(0);
  [dp[0], dp[1]] = [amounts[0], amounts[0] + amounts[1]];
  dp[2] = [
    [0, 1],
    [0, 2],
    [1, 2],
  ].reduce((dp2, seq) => Math.max(dp2, amounts[seq[0]] + amounts[seq[1]]), 0);

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + amounts[i], dp[i - 3] + amounts[i - 1] + amounts[i]);
  }
  console.log(dp[n - 1]);
}
