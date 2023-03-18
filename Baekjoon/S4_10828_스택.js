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
  // 연산자 우선순위 주의하자..! 더하기 연산자가 삼항 연산자보다 우선이다.
  const N = +input();
  const stack = [];
  const results = [];

  for (let _ = 0; _ < N; _++) {
    const commandline = input().split(' ');
    switch (commandline[0]) {
      case 'push':
        stack.push(+commandline[1]);
        break;
      case 'pop':
        results.push(stack.pop() ?? -1);
        break;
      case 'size':
        results.push(stack.length);
        break;
      case 'empty':
        results.push(stack.length === 0 ? 1 : 0);
        break;
      case 'top':
        results.push(stack.length >= 1 ? stack.at(-1) : -1);
    }
  }
  console.log(results.join('\n'));
}
