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

// -----------[MAIN LOGIC]---------------------------------------
function main() {
  const [N, K] = input().split(' ').map(Number);
  const people = Array.from({ length: N }, (_, i) => i + 1);
  const result = [];

  let remove_count = 0;
  for (let i = -1; remove_count < N; remove_count++) {
    for (let c = 0; c < K; c++) {
      i = (i + 1) % N;
      while (people[i] === 0) i = (i + 1) % N;
    }
    result.push(people[i]);
    people[i] = 0;
  }
  console.log(`<${result.join(', ')}>`);
}
