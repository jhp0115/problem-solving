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
  const numbers = Array.from({ length: N }, (_, i) => i + 1);
  const stack = [];
  const tasks = [];
  for (let i = 0; i < N; i++) {
    const target = +input();
    while (stack.length === 0 || stack.at(-1) < target) {
      stack.push(numbers.shift());
      tasks.push('+');
    }
    if (stack.at(-1) === target) {
      stack.pop();
      tasks.push('-');
    } else {
      console.log('NO');
      return;
    }
  }
  console.log(tasks.join('\n'));
}
