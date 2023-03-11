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

// -----------[MAIN LOGIC HERE]---------------------------------------
function main() {
  const N = +input();
  const strings_set = new Set();

  for (let i = 0; i < N; i++) {
    strings_set.add(input());
  }

  const answer = [...strings_set] //
    .sort((a, b) => (a.length === b.length ? (a < b ? -1 : 1) : a.length - b.length))
    .join('\n');
  console.log(answer);
}
