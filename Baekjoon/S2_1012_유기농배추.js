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
  const T = +input();
  let answer_string = '';
  const graph = Array.from({ length: 50 }, () => Array.from({ length: 50 }, () => 0));
  for (let _ = 0; _ < T; _++) {
    let count = 0;

    const [M, N, K] = input().split(' ').map(Number);
    const pos_ls = [];
    for (let i = 0; i < K; i++) {
      const pos_l = input().split(' ').map(Number);
      pos_ls.push(pos_l);
      graph[pos_l[0]][pos_l[1]] = 1;
    }

    // 개수 세기, bfs을 이용해서 그래프 원상복구(근처의 1들을 0으로 변환).
    for (const [i, j] of pos_ls) {
      if (graph[i][j] === 1) {
        count += 1;
        bfs(graph, i, j, M, N);
      }
    }

    answer_string += count + '\n';
  }
  console.log(answer_string);
}

// 상하좌우 이동하면서 인접한 1들을 0으로 변경.
function bfs(graph, start_x, start_y, M, N) {
  /**
   * BFS 큐에 노드를 넣을 때, 똑같은 노드를 여러 번 큐에 넣는 일을 줄여야 한다.
   * 큐에 넣는 순간에 방문처리 해서 해당 노드가 중복으로 들어가지 못하도록 하거나,
   * 큐에서 꺼냈을 때 이미 처리된 적 있으면 즉시 continue하는 방식으로 중복을 없앨 수 있다.
   */
  const queue = [[start_x, start_y]];
  graph[start_x][start_y] = 0;
  const delta = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (queue.length >= 1) {
    const [cur_x, cur_y] = queue.shift();

    for (const [dx, dy] of delta) {
      const [new_x, new_y] = [cur_x + dx, cur_y + dy];
      if (0 <= new_x && new_x < M && 0 <= new_y && new_y < N && graph[new_x][new_y] === 1) {
        queue.push([new_x, new_y]);
        graph[new_x][new_y] = 0;
      }
    }
    //
  }
}
