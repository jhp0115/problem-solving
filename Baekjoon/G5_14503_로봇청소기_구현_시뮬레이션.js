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
  const pos = input().split(' ').map(Number);
  // 0: 청소되지 않은 빈 칸, 1: 벽, 2: 청소된 빈 칸.
  const room = Array.from({ length: N }, () => input().split(' ').map(Number));

  let count = 0;

  while (true) {
    const [x, y, dir] = pos;
    if (room[x][y] === 0) {
      room[x][y] = 2;
      count += 1;
    }

    if (checkAllCleanedCrossly(room, x, y, N, M) === true) {
      const [bx, by] = getBackwardPos(x, y, dir);
      if (bx < 0 || bx >= N || by < 0 || by >= M || room[bx][by] === 1) break;
      else {
        [pos[0], pos[1]] = [bx, by];
      }
    } else {
      pos[2] = dir === 0 ? 3 : dir - 1; // 90도 반시계 회전.
      const [fx, fy] = getForwardPos(x, y, pos[2]);
      if (0 <= fx && fx < N && 0 <= fy && fy < M && room[fx][fy] === 0) {
        [pos[0], pos[1]] = [fx, fy];
      }
    }
  }
  console.log(count);
}

function checkAllCleanedCrossly(room, x, y, N, M) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  let result = true;
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (0 <= nx && nx < N && 0 <= ny && ny < M && room[nx][ny] === 0) {
      result = false;
      break;
    }
  }
  return result;
}

// 후진이 가능한지는 고려하지 않는다. return: [new_x, new_y].
function getBackwardPos(x, y, dir) {
  // dir: 0: 북, 1: 동, 2: 남, 3: 서.
  const new_pos = [x, y];
  switch (dir) {
    case 0:
      new_pos[0] += 1;
      break;
    case 1:
      new_pos[1] -= 1;
      break;
    case 2:
      new_pos[0] -= 1;
      break;
    case 3:
      new_pos[1] += 1;
      break;
  }
  return new_pos;
}

function getForwardPos(x, y, dir) {
  const new_pos = [x, y];
  switch (dir) {
    case 0:
      new_pos[0] -= 1;
      break;
    case 1:
      new_pos[1] += 1;
      break;
    case 2:
      new_pos[0] += 1;
      break;
    case 3:
      new_pos[1] -= 1;
      break;
  }
  return new_pos;
}
