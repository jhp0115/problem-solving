const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readlines = [];
let input;

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
  const [N, M] = input()
    .split(' ')
    .map((s) => +s);
  const raw_values = [];
  const test_cases = [];
  const sums = [];

  // 입력.
  for (let i = 0; i < N; i++) {
    raw_values.push(
      input()
        .split(' ')
        .map((s) => +s)
    );
  }
  for (let i = 0; i < M; i++) {
    test_cases.push(
      input()
        .split(' ')
        .map((s) => +s)
    );
  }

  // 누적합 구하기.
  for (let i = 0; i < N; i++) {
    sums.push(Array(N).fill(0)); // 배열 초기화 할 때 원소 개수가 N이라고 해줘야 한다. 테스트케이스처럼 4라고 썼다가 헤맸다..
  }

  // 중복으로 더한 구간은 한 번 빼 준다.
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      sums[i][j] += raw_values[i][j];
      if (i >= 1) {
        sums[i][j] += sums[i - 1][j];
      }
      if (j >= 1) {
        sums[i][j] += sums[i][j - 1];
      }
      if (i >= 1 && j >= 1) {
        sums[i][j] -= sums[i - 1][j - 1];
      }
    }
  }

  // test cases.
  let answer = '';
  for (let i = 0; i < test_cases.length; i++) {
    const [x1, y1, x2, y2] = test_cases[i].map((n) => n - 1);
    let result = sums[x2][y2];
    if (x1 >= 1) {
      result -= sums[x1 - 1][y2];
    }
    if (y1 >= 1) {
      result -= sums[x2][y1 - 1];
    }
    if (x1 >= 1 && y1 >= 1) {
      result += sums[x1 - 1][y1 - 1];
    }
    answer += result + '\n'; // console.log(각각의 답)을 반복문으로 출력하면 시간 초과가 나므로 문자열을 이어붙인 후 출력한다.
  }
  console.log(answer);
}
