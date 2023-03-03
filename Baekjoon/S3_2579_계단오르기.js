const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readlines = [];
let input; // same as python's.

rl.on('line', function (line) {
  readlines.push(line);
});
rl.on('close', function () {
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
  /**
   * Review
   * 1. DP 테이블에서 이전 항의 값은 수정하는 것이 아니다. 이전 항은 이미 최선의 값을 저장하고 있기 때문이다.
   * 2. 조건을 자세히 읽고 점화식을 세워야 한다. (세 번째 조건 '마지막 계단은 반드시 밟아야 함'을 간과했다.)
   * 3. 내가 작성한 코드가 나타내는 상황들이 서로를 포함하고 있는지 여부, 그래서 어느 하나는 필요 없는지의 여부를 살펴보자.
   * 4. DP는 점화식을 이용해서, 문제 풀이를 모든 항에 대해 보편화한 것이다.
   *    구하려는 항이 목표 항과 다를 때도 항상 귀납성이 성립되어 답이 나와야 한다는 점을 인지하면 좋을 것 같다.
   */
  const N = +input();
  const scores = [];
  for (let i = 0; i < N; i++) {
    scores.push(+input());
  }

  const best_scores = Array(N).fill(0);

  [best_scores[0], best_scores[1]] = [scores[0], scores[0] + scores[1]];
  best_scores[2] =
    scores[0] + scores[2] > scores[1] + scores[2] ? scores[0] + scores[2] : scores[1] + scores[2];

  for (let i = 3; i < N; i++) {
    best_scores[i] = Math.max(
      best_scores[i - 2] + scores[i],
      best_scores[i - 3] + scores[i - 1] + scores[i]
    );
  }

  console.log(best_scores[N - 1]);
}
