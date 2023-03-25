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
  const [N, M] = input().split(' ').map(Number);
  const board = Array.from({ length: N }, () => input().split(' ').map(Number));

  const answer = getTetrominoCases().reduce((max_value, tetromino) => {
    const max_x_of_tetromino = Math.max(...tetromino.map((block) => block[0]));
    const max_y_of_tetromino = Math.max(...tetromino.map((block) => block[1]));
    for (let x = 0; x + max_x_of_tetromino <= N - 1; x++) {
      for (let y = 0; y + max_y_of_tetromino <= M - 1; y++) {
        const sum_each_case = tetromino.reduce((acc, block) => acc + board[x + block[0]][y + block[1]], 0);
        max_value = Math.max(max_value, sum_each_case);
      }
    }
    return max_value;
  }, 0);
  console.log(answer);
}

function getTetrominoCases() {
  return [
    // 일직선: 2개.
    [[0, 0], [0, 1], [0, 2], [0, 3]],
    [[0, 0], [1, 0], [2, 0], [3, 0]],
    // 정사각형: 1개.
    [[0, 0], [0, 1], [1, 0], [1, 1]],
    // 주황색 반전X: 4개.
    [[0, 0], [1, 0], [2, 0], [2, 1]],
    [[0, 0], [0, 1], [0, 2], [1, 0]],
    [[0, 0], [0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 0], [1, 1], [1, 2]],
    // 주황색 반전O: 4개.
    [[0, 1], [1, 1], [2, 0], [2, 1]],
    [[0, 0], [1, 0], [1, 1], [1, 2]],
    [[0, 0], [0, 1], [1, 0], [2, 0]],
    [[0, 0], [0, 1], [0, 2], [1, 2]],
    // 초록색 반전X: 2개.
    [[0, 0], [1, 0], [1, 1], [2, 1]],
    [[0, 1], [0, 2], [1, 0], [1, 1]],
    // 초록색 반전O 2개.
    [[0, 1], [1, 0], [1, 1], [2, 0]],
    [[0, 0], [0, 1], [1, 1], [1, 2]],
    // ㅜ: 4개.
    [[0, 0], [0, 1], [0, 2], [1, 1]],
    [[0, 1], [1, 0], [1, 1], [2, 1]],
    [[0, 1], [1, 0], [1, 1], [1, 2]],
    [[0, 0], [1, 0], [1, 1], [2, 0]]
  ];
}
