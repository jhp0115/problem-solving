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
  const Xs = input().split(' ').map(Number);

  const x2rank = new Map();
  [...new Set(Xs)] //
    .sort((a, b) => a - b)
    .forEach((number, i) => x2rank.set(number, i));

  const answer = Xs.map((number) => x2rank.get(number)).join(' ');
  console.log(answer);
}
