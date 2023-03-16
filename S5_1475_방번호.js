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
  const N = input(); //string
  const digits = N.split('').map(Number);
  const needed_counts = Array.from({ length: 10 }, () => 0);

  for (const digit of digits) needed_counts[digit] += 1;
  needed_counts[6] = Math.ceil((needed_counts[6] + needed_counts[9]) / 2);
  needed_counts[9] = 0;

  console.log(Math.max(...needed_counts));
}
