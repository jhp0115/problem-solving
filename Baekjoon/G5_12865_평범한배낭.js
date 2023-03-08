const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readlines = [];
let input;

rl.on('line', (line) => {
  readlines.push(line);
});
rl.on('close', () => {
  const input_generator = input_generator_constructor(readlines);
  input = () => input_generator.next().value;
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
  const [N, K] = input().split(' ').map((s) => +s);
  const things = Array.from({ length: N }, () => input().split(' ').map((s) => +s));

  // 행은 유무 여부를 고려한 물건 수(입력받은 순), 열은 무게 제한.
  const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

  for (let n = 1; n <= N; n++) {
    const [tw, tv] = things[n - 1];
    for (let w = 1; w <= K; w++) {
      // 새 물건을 기존 상황에서 추가로 넣는 경우와 안 넣는 경우 중 가치가 더 높은 경우를 저장한다.
      dp[n][w] = Math.max(dp[n - 1][w], w - tw >= 0 ? dp[n - 1][w - tw] + tv : 0);
    }
  }

  console.log(dp[N][K]);
}
