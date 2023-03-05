const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readlines = [];
let input; // input function like python.

rl.on('line', (line) => {
  readlines.push(line);
});
rl.on('close', () => {
  const input_generator = input_generator_constructor(readlines);
  input = () => input_generator.next().value;
  main();
  process.exit();
});

// -----------[MAIN LOGIC]---------------------------------------
function main() {
  const directions = ([RIGHT, UP, LEFT, DOWN] = [0, 1, 2, 3]);
  const N = +input();
  const board = [];
  for (let i = 0; i < N; i++) {
    board.push(
      input()
        .split(' ')
        .map((s) => +s)
    );
  }

  let max = [0];
  for (const direction of directions) {
    dfs(1, direction, N, board, max);
  }
  console.log(max[0]);
}

function dfs(r, direction, N, board, max) {
  if (r === 6) {
    max[0] = Math.max(
      max[0],
      board.reduce((acc, line) => {
        const m = Math.max(...line);
        return acc < m ? m : acc;
      }, 0)
    );
    return;
  }

  for (let i = 0; i <= 3; i++) {
    dfs(r + 1, i, N, pushToward(direction, N, board), max);
  }
}

function pushToward(direction, N, prev_board) {
  const board = [];
  prev_board.forEach((line) => {
    board.push([...line]);
  });

  const [RIGHT, UP, LEFT, DOWN] = [0, 1, 2, 3];

  let isColumn, start_index, last_index, delta;

  switch (direction) {
    case RIGHT:
      [isColumn, start_index, last_index, delta] = [true, N - 1, -1, -1];
      break;
    case UP:
      [isColumn, start_index, last_index, delta] = [false, 0, N - 1, 1];
      break;
    case LEFT:
      [isColumn, start_index, last_index, delta] = [true, 0, N, 1];
      break;
    case DOWN:
      [isColumn, start_index, last_index, delta] = [false, N - 1, 0, -1];
      break;
  }

  let until;
  if (direction === DOWN) {
    until = last_index - 1;
  } else if (direction === UP) {
    until = last_index + 1;
  } else {
    until = last_index;
  }

  for (let i = start_index; i !== until; i += delta) {
    for (let j = 0; j < N; j++) {
      if (isColumn) {
        for (let k = i; direction === LEFT ? k >= 0 : k < N; direction === LEFT ? k-- : k++) {
          for (let l = k; direction === LEFT ? l >= 0 : l < N; direction === LEFT ? l-- : l++) {
            if (board[j][l] === 0) {
              board[j][l] = board[j][k];
              board[j][k] = 0;
            }
          }
        }
      } else {
        for (let k = i; direction === DOWN ? k < N : k >= 0; direction === DOWN ? k++ : k--) {
          for (let l = k; direction === DOWN ? l < N : l >= 0; direction === DOWN ? l++ : l--) {
            if (board[l][j] === 0) {
              board[l][j] = board[k][j];
              board[k][j] = 0;
            }
          }
        }
      }
    }
  }

  for (let i = start_index; i !== last_index; i += delta) {
    for (let j = 0; j < N; j++) {
      if (isColumn) {
        if (board[j][i] === board[j][i + delta]) {
          board[j][i] *= 2;
          board[j][i + delta] = 0;
        }
      } else {
        if (board[i][j] === board[i + delta][j]) {
          board[i][j] *= 2;
          board[i + delta][j] = 0;
        }
      }
    }
  }

  for (let i = start_index; i !== until; i += delta) {
    for (let j = 0; j < N; j++) {
      if (isColumn) {
        for (let k = i; direction === LEFT ? k >= 0 : k < N; direction === LEFT ? k-- : k++) {
          for (let l = k; direction === LEFT ? l >= 0 : l < N; direction === LEFT ? l-- : l++) {
            if (board[j][l] === 0) {
              board[j][l] = board[j][k];
              board[j][k] = 0;
            }
          }
        }
      } else {
        for (let k = i; direction === DOWN ? k < N : k >= 0; direction === DOWN ? k++ : k--) {
          for (let l = k; direction === DOWN ? l < N : l >= 0; direction === DOWN ? l++ : l--) {
            if (board[l][j] === 0) {
              board[l][j] = board[k][j];
              board[k][j] = 0;
            }
          }
        }
      }
    }
  }

  return board;
}
