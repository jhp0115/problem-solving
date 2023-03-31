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
  let [N, K] = input().split(' ').map(Number);
  const visited = Array(100_001).fill(false); // count가 더 높은 상태라면 같은 좌표에 다시 방문하지 않는다.

  if (N === K) {
    console.log(0);
    return;
  }

  const queue = [];

  const nexts = [N * 2, N + 1, N - 1];
  for (const next of nexts) {
    if (0 > next || next > 100_000) continue;
    if (K === next) {
      console.log(1);
      return;
    }
    queue.push([next, 1]);
    visited[next] = true;
  }

  while (queue.length > 0) {
    const cur = queue.shift();

    const next_poses = [cur[0] * 2, cur[0] + 1, cur[0] - 1];
    for (const next_pos of next_poses) {
      if (0 > next_pos || next_pos > 100_000) continue;
      if (visited[next_pos]) continue;
      if (K === next_pos) {
        console.log(cur[1] + 1);
        return;
      }
      queue.push([next_pos, cur[1] + 1]);
      visited[next_pos] = true;
    }
    //
  }
}
