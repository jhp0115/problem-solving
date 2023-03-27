const { isErrored } = require('stream');

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
  const T = +input();

  let result_string = '';
  for (let _ = 0; _ < T; _++) {
    let [is_error, reversed, left, right] = [false, false, 100, -100];
    const [p, n, line] = [input(), +input(), input()];
    const array = (line.match(/[0-9]+/g) ?? []).map(Number);

    if (array.length >= 1) [left, right] = [0, array.length - 1];

    for (let i = 0; i < p.length; i++) {
      if (p[i] === 'R') {
        reversed = !reversed;
        continue;
      }
      if (left > right) {
        is_error = true;
        break;
      }
      if (reversed) right -= 1;
      else left += 1;
    }

    result_string 
      += (is_error === false)
        ? `[${
          reversed 
            ? array.slice(left, right + 1).reverse().join(',')
            : array.slice(left, right + 1).join(',')
          }]\n`
        : 'error\n';
  }
  console.log(result_string);
}
