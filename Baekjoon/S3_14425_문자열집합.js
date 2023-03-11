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
  const [N, M] = input().split(' ').map(Number);
  const S = new Set(Array.from({ length: N }, () => input()));
  const strings = Array.from({ length: M }, () => input());

  const answer = strings.reduce((count, string) => (S.has(string) ? count + 1 : count), 0);
  console.log(answer);
}
