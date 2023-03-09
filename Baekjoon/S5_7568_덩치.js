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
  const N = +input();
  const people = Array.from({ length: N }, () => input().split(' ').map(Number));

  let result_string = '';
  for (const p of people) {
    let rank = 1;
    for (const other of people) {
      if (p[0] < other[0] && p[1] < other[1]) {
        rank += 1;
      }
    }
    result_string += `${rank} `;
  }
  console.log(result_string);
}
