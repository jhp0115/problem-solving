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
  // main logic
  const X = +input();

  let l = 0; // X보다 작은 1+2+3+...계산 값.
  let n = 0; // 분모나 분자의 기본 수
  for (let i = 0; ; i++) {
    if (l + i >= X) {
      break;
    }
    l += i;
    n += 1;
  }

  // X - n: 주어진 수 - 기본 수
  // X - l: 주어진 수 - l === 진행 상 남은 칸 수.

  if (n % 2 === 0) {
    console.log(`${X - l}/${n + 1 - (X - l)}`);
  } else {
    console.log(`${n + 1 - (X - l)}/${X - l}`);
  }
}
