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
  const [M, N] = input().split(' ').map(Number); // M: 가로, N: 세로.
  const queue = []; // [ [x, y, day] ]
  const box = Array.from({ length: N }, (_, n) => input().split(' ').map(Number));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (box[i][j] === 1) queue.push([i, j, 0]);
    }
  }

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];

  let largest_day = 0;
  let queue_pointer = 0;
  while (queue.length > queue_pointer) {
    const [x, y, day] = queue[queue_pointer];
    queue_pointer += 1;
    for (let i = 0; i < 4; i++) {
      const [nx, ny, nd] = [x + dx[i], y + dy[i], day + 1];
      if (0 <= nx && nx < N && 0 <= ny && ny <= M && box[nx][ny] === 0) {
        queue.push([nx, ny, nd]);
        box[nx][ny] = 1;
        largest_day = nd;
      }
    }
  }

  // 0이 남아 있는지 여부 확인.
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (box[i][j] === 0) {
        console.log(-1);
        return;
      }
    }
  }

  console.log(largest_day);
}
