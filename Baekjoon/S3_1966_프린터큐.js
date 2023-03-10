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
  /**
   * 현재 문서를 큐의 맨 뒤로 재배치하는 것과 같은 효과가 있는 방법은
   * 배열 원소를 가리키는 포인터가 그 원소를 그냥 지나치는 것이다.
   * 그리고 큐는 순환하도록 한다.
   */
  const n_test_cases = +input();
  for (let i = 0; i < n_test_cases; i++) {
    const [N, M] = input().split(' ').map(Number);
    const queue = input().split(' ').map(Number); // 이미 인쇄한 것은 원소값을 -1로 바꾼다.
    getCount(M, queue);
  }
}

function getCount(M, queue) {
  let count = 0;

  for (let i = 0; ; ) {
    // i + 1, i + 2, ..., -1, 0, 1, ... i - 1까지 queue[i]보다 큰 값이 없다면 그걸 -1로 바꾸고 count++. 있으면 그냥 지나치기.
    // 다음 배열을 계속 새로 만드는 것보다, 원본 큐를 shift and push를 하는 것도 좋았을 것 같다.
    const nexts = queue.slice(i + 1, queue.length).concat(queue.slice(0, i));
    const is_biggest = nexts.reduce((result, value) => (value > queue[i] ? false : result), true);
    if (is_biggest) {
      queue[i] = -1;
      count += 1;

      if (i === M) {
        console.log(count);
        return;
      }
    }

    i += 1;
    if (i >= queue.length) i = 0;
  }

  //
}
