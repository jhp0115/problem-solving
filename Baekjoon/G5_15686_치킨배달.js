const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readlines = [];
let input;

rl.on('line', (line) => readlines.push(line));
rl.on('close', () => {
  const input_generator = input_generator_constructor(readlines);
  input = () => input_generator.next().value;
  main();
  process.exit();
});

function* input_generator_constructor(readlines) {
  for (const line of readlines) yield line;
}

// -----------[MAIN LOGIC]---------------------------------------
function main() {
  const [N, M] = input().split(' ').map(Number);
  const pos_houses = [];
  const pos_chickens = [];
  for (let i = 0; i < N; i++) {
    const line = input().split(' ').map(Number);
    for (let j = 0; j < N; j++) {
      if (line[j] === 1) pos_houses.push([i, j]);
      if (line[j] === 2) pos_chickens.push([i, j]);
    }
  }

  const combinations = combinationsToRemove(
    Array.from({ length: pos_chickens.length }, (_, i) => i),
    pos_chickens.length - M
  );

  let result = combinations.length >= 1 ? 1e9 : getTotalChickenDistances(pos_houses, pos_chickens, []);
  combinations.forEach((to_removes) => {
    result = Math.min(result, getTotalChickenDistances(pos_houses, pos_chickens, to_removes));
  });
  console.log(result);
}

function getTotalChickenDistances(pos_houses, pos_chickens, to_removes) {
  let sum = 0;
  for (const pos_house of pos_houses) {
    let cur = null;
    for (const [i, pos_chicken] of pos_chickens.entries()) {
      if (to_removes.includes(i)) continue;
      if (cur === null) {
        cur = Math.abs(pos_chicken[0] - pos_house[0]) + Math.abs(pos_chicken[1] - pos_house[1]);
        continue;
      }
      cur = Math.min(cur, Math.abs(pos_chicken[0] - pos_house[0]) + Math.abs(pos_chicken[1] - pos_house[1]));
    }
    sum += cur ?? 0;
  }
  return sum;
}

function combinationsToRemove(array, r) {
  if (r === 1) {
    return array.map((num) => [num]);
  }
  return array.reduce((acc, current, i) => {
    const nexts = array.slice(i + 1);
    return acc.concat(combinationsToRemove(nexts, r - 1).map((next) => [current].concat(next)));
  }, []);
}
