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
  const seq = input().split(' ').map(Number);
  const dp = Array(n).fill(0);

  let max = seq[0];
  dp[0] = seq[0];

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + seq[i], seq[i]);
    max = Math.max(max, dp[i]);
  }
  console.log(max);
}
