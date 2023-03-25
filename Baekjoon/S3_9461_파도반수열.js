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
  const T = +input();
  const Ns = Array.from({ length: T }, () => +input());
  const max_N = Math.max(...Ns);

  const dp = Array(max_N - 1).fill(0);
  [dp[0], dp[1], dp[2], dp[3], dp[4]] = [1, 1, 1, 2, 2];

  for (let i = 5; i < max_N; i++) {
    dp[i] = dp[i - 1] + dp[i - 5];
  }

  const result_string = Ns.map((N) => dp[N - 1]).join('\n');
  console.log(result_string);
}
