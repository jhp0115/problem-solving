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

// -----------[MAIN LOGIC HERE]---------------------------------------
function main() {
  // input()함수를 사용하면 콘솔로 입력받은 라인을 한 줄 씩 문자열로 반환합니다.

  // --[vscode에서 입출력 예시 테스트하는 방법]------
  // 백준에서 입력 예시를 콘솔 창에 복사 붙여넣기하시고,
  // 엔터를 한 번 눌러서 마지막 줄까지 확실히 입력시킨 다음,
  // ctrl+C로 종료하시면 main() 함수가 실행됩니다.

  // 아래 예시는 백준 1181번 문제 풀이 코드입니다.
  const N = +input();
  const strings_set = new Set();

  for (let i = 0; i < N; i++) {
    strings_set.add(input());
  }

  const answer = [...strings_set]
    .sort((a, b) => (a.length === b.length ? (a < b ? -1 : 1) : a.length - b.length))
    .join('\n');
  console.log(answer);
}
