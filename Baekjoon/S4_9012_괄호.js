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
  const T = +input();
  for (let i = 0; i < T; i++) {
    console.log(checkVPS(input()) ? 'YES' : 'NO');
  }
}

function checkVPS(string) {
  let answer = true;
  // '('은 항상 push, ')'는 이전 원소가 '('이면 그 '('를 pop, 아니면 answer = false.
  const stack = [];
  for (const char of string) {
    if (char === '(') {
      stack.push('(');
      continue;
    }
    if (char === ')' && stack.at(-1) === '(') {
      stack.pop();
      continue;
    }
    // '('가 ')'에 의해 pop되지 않아서 '))'와 같이 닫는 괄호가 연속으로 스택에 있는 경우 바로 false 반환.
    return false;
  }
  if (stack.length !== 0) answer = false;

  return answer;
}
