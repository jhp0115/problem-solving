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
  const liquid = input().split(' ').map(Number);
  const sorted = liquid.sort((a, b) => a - b);

  let answer_pair = [0, N - 1];
  let [left, right] = [0, N - 1];
  while (left < right) {
    if (
      Math.abs(sorted[left] + sorted[right]) <
      Math.abs(sorted[answer_pair[0]] + sorted[answer_pair[1]])
    ) {
      answer_pair[0] = left;
      answer_pair[1] = right;
    }

    if (Math.abs(sorted[left]) < Math.abs(sorted[right])) right -= 1;
    else left += 1;
  }
  console.log(sorted[answer_pair[0]], sorted[answer_pair[1]]);
}
