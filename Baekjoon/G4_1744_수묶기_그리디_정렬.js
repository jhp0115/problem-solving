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
  const seq = Array.from({ length: N }, () => +input());

  const positives = seq.filter((n) => n > 0).sort((a, b) => b - a);
  const negatives = seq.filter((n) => n < 0).sort((a, b) => a - b);
  const cnt_zero = seq.filter((n) => n === 0).length;

  let sum = 0;

  // 양수 처리
  for (let i = 0; i < positives.length; ) {
    if (i + 1 < positives.length) {
      sum +=
        positives[i] === 1 || positives[i + 1] === 1
          ? positives[i] + positives[i + 1]
          : positives[i] * positives[i + 1];
      i += 2;
    } else {
      sum += positives[i];
      i += 1;
    }
  }

  // 음수끼리 곱해서 더하기. 하나 남은 음수가 있는데 0이 하나라도 있다면 그 수는 더하지 않는다.
  for (let i = 0; i < negatives.length; ) {
    if (i + 1 < negatives.length) {
      sum += negatives[i] * negatives[i + 1];
      i += 2;
    } else {
      if (cnt_zero === 0) sum += negatives[i];
      i += 1;
    }
  }

  console.log(sum);
}
