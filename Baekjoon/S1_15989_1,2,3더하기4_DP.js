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
  const test_cases = Array.from({ length: T }, () => +input());
  const max_case = Math.max(...test_cases);

  const dp = Array(max_case + 1).fill(0);

  /**
   * 숫자(1, 2, 3) 종류마다,
   * 해당 숫자를, dp에서 더 작은 수를 구성했던 경우에 추가로 붙인다.
   * 순서만 다른 경우는 같은 경우로 간주하므로, 한 쪽에서만 붙여나간다.
   * ex: dp[4]가 dp[4 - 2(추가할 숫자)]를 참조하는 예시: [2] + 1 + 1 <- 1 + 1
   */
  for (let i = 1; i <= 3; i++) {
    dp[i] += 1;
    for (let j = i + 1; j <= max_case; j++) {
      dp[j] += dp[j - i];
    }
  }

  const answer = test_cases.map((tc) => dp[tc]).join('\n');
  console.log(answer);
}
