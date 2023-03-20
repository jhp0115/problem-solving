const filePath =
  process.env.PWD !== '/workspace/node-backend/problem-solving' ? '/dev/stdin' : './input.txt';
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
  const queue = [];
  const answers = [];

  for (let _ = 0; _ < N; _++) {
    const commandline = input().split(' ');
    switch (commandline[0]) {
      case 'push':
        queue.push(+commandline[1]);
        break;
      case 'pop':
        answers.push(queue.length >= 1 ? queue.shift() : -1);
        break;
      case 'size':
        answers.push(queue.length);
        break;
      case 'empty':
        answers.push(queue.length === 0 ? 1 : 0);
        break;
      case 'front':
        answers.push(queue.length >= 1 ? queue[0] : -1);
        break;
      case 'back':
        answers.push(queue.length >= 1 ? queue.at(-1) : -1);
    }
  }
  console.log(answers.join('\n'));
}
