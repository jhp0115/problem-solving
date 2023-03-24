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
  const [N, M] = input().split(' ').map(Number);
  const price_set = [];
  const price_each = [];
  for (let i = 0; i < M; i++) {
    const line = input().split(' ').map(Number);
    price_each.push(line[1]);
    price_set.push(line[1] * 6 > line[0] ? line[0] : line[1] * 6);
  }

  const [sets, lefts] = [Math.floor(N / 6), N % 6];

  const price_each_multipled = price_each.map((each_price) => lefts * each_price);

  const answer = sets * Math.min(...price_set) + Math.min(...price_set, ...price_each_multipled);
  console.log(answer);
}
