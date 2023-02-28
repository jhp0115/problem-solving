const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readlines = [];
let input; // same as python's.

rl.on('line', function (line) {
  readlines.push(line);
});
rl.on('close', function () {
  const input_generator = input_generator_constructor(readlines);
  input = () => input_generator.next().value;
  main();
  process.exit();
});

function* input_generator_constructor(readlines) {
  for (const line of readlines) {
    yield line;
  }
}

// -----------[MAIN LOGIC]---------------------------------------
function main() {
  const N = +input();
  const abilities = [];
  for (let i = 0; i < N; i++) {
    abilities.push(
      input()
        .split(' ')
        .map((s) => +s)
    );
  }
  let min = Number.MAX_SAFE_INTEGER;

  /**
   * 이 코드를.. 개선해보자.
   */
  const teams = combination([...Array(N).keys()], N / 2);
  teams.forEach((team1) => {
    const team2 = [];
    for (let i = 0; i < N; i++) {
      if (!new Set(team1).has(i)) team2.push(i);
    }
    const ability_team1 = combination(team1, 2).reduce((acc, pair) => {
      return acc + abilities[pair[0]][pair[1]] + abilities[pair[1]][pair[0]];
    }, 0);
    const ability_team2 = combination(team2, 2).reduce((acc, pair) => {
      return acc + abilities[pair[0]][pair[1]] + abilities[pair[1]][pair[0]];
    }, 0);

    min = Math.min(min, Math.abs(ability_team1 - ability_team2));
  });

  console.log(min);
}

function combination(array, r) {
  const results = [];

  for (let start_index = 0; start_index < array.length - r + 1; start_index++) {
    let result = [];
    dfs(array, results, result, start_index, r);
  }

  return results;
}

// dfs로 조합 만들기.
function dfs(array, results, result, index_from, r) {
  result.push(array[index_from]);

  if (r === 1) {
    results.push([...result]);
    return;
  }

  for (let i = index_from + 1; i < array.length; i++) {
    dfs(array, results, result, i, r - 1);
    result.pop();
  }
}
