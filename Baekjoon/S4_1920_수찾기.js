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
  const numbers = new Set(input().split(' ').map(Number));
  const M = +input();
  const questions = input().split(' ').map(Number);

  const answer = questions.map((question) => (numbers.has(question) ? 1 : 0)).join('\n');
  console.log(answer);
}
