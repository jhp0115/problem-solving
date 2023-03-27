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
  // 점화식이 이 문제처럼 단순하다면 굳이 dp 테이블 없이 i-1, i-2의 값을 임시로 저장할 변수들만
  // 선언해도 좋을 것 같다.
  const dp = Array(N + 1).fill(0);
  [dp[1], dp[2]] = [1, 2];

  for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
  }

  console.log(dp[N]);
}
