const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readlines = [];
let input;

rl.on('line', function (line) {
  readlines.push(line);
});
rl.on('close', function () {
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
  const N = +input();
  const sequence = [1, 2, 1];

  if (N <= 3) {
    let result = '';
    for (let i = 0; i < N; i++) {
      result += sequence[i];
    }
    console.log(result);
    return;
  }

  dfs(sequence, N);
}

function checkBadSequence(array, last_index, each_length_of_sub_sequence) {
  const left_sub_sequence = [...Array(each_length_of_sub_sequence).keys()]
    .map((_, i) => last_index - 2 * each_length_of_sub_sequence + i + 1)
    .map((index) => array[index]);

  const right_sub_sequence = [...Array(each_length_of_sub_sequence).keys()]
    .map((_, i) => last_index - each_length_of_sub_sequence + i + 1)
    .map((index) => array[index]);

  // true: BAD sequence, false: GOOD.
  return left_sub_sequence.join('') === right_sub_sequence.join('');
}

function dfs(sequence, N) {
  if (sequence.length === N) {
    console.log(sequence.join(''));
    return;
  }

  const candidates = [1, 2, 3];
  for (const number of candidates) {
    let is_pushed = true;
    sequence.push(number);
    for (let el = 1; el <= Math.floor(sequence.length / 2); el++) {
      if (checkBadSequence(sequence, sequence.length - 1, el)) {
        is_pushed = false;
        sequence.pop();
        break;
      }
    }

    if (is_pushed) {
      dfs(sequence, N);
      if (sequence.length === N) {
        return;
      }

      sequence.pop();
    }
  }
}
