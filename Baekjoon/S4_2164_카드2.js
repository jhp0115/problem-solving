const filePath =
  process.env.PWD === '/workspace/node-backend/problem-solving' ? './input.txt' : '/dev/stdin';
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
  const cards = Array.from({ length: N }, (_, i) => i + 1);

  let [cnt_remove, pointer] = [0, 0];

  while (true) {
    if (cnt_remove === N - 1) {
      console.log(cards.find((number) => number !== 0));
      break;
    }

    cards[pointer] = 0;
    cnt_remove += 1;

    pointer = (pointer + 1) % N;
    while (cards[pointer] === 0) pointer = (pointer + 1) % N;

    pointer = (pointer + 1) % N;
    while (cards[pointer] === 0) pointer = (pointer + 1) % N;
  }
}
