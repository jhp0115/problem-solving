const platform = 0; // 0: Mine, 1: Baekjoon
const filePath = platform === 1 ? '/dev/stdin' : './input.txt';
const readlines = require('fs').readFileSync(filePath).toString().trim().split('\n');
const generator = input_generator_constructor(readlines);
const input = () => generator.next().value;
function* input_generator_constructor(readlines) {
  for (const line of readlines) yield line;
}
main();

// -----------[MAIN LOGIC]---------------------------------------
function main() {
  // 아래 예시 코드는 백준 1620 답안 코드입니다.
  const [N, M] = input().split(' ').map(Number);
  const number_name = new Map();
  const name_number = new Map();
  for (let i = 1; i <= N; i++) {
    const name = input();
    number_name.set(i, name);
    name_number.set(name, i);
  }

  let result_string = '';
  for (let i = 0; i < M; i++) {
    const question = input();
    result_string += Number.isNaN(+question)
      ? name_number.get(question) + '\n'
      : number_name.get(+question) + '\n';
  }
  console.log(result_string);
}
