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
  const consultings = [null].concat(
    Array.from({ length: N }, () => input().split(' ').map(Number))
  ); // Ti, Pi
  // completion_list: 특정 날짜(인덱스)에 끝나는 상담들의 시작일.
  const completion_list = Array.from({ length: N + 1 }, () => []);
  const revenue = Array.from({ length: N + 1 }, () => 0);

  for (let day = 1; day <= N; day++) {
    // 현재 날짜(day)에 시작하는 상담이 언제 완료되는지.
    const when_complete = day - 1 + consultings[day][0];
    if (when_complete <= N) completion_list[when_complete].push(day);

    revenue[day] = completion_list[day].reduce(
      (max, start_day) => Math.max(max, revenue[start_day - 1] + consultings[start_day][1]),
      revenue[day - 1]
    );
  }
  console.log(revenue[N]);
}
