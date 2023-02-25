const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nums;
let numbers = [];

let rl_count = 0;
rl.on("line", (line) => {
  if (rl_count === 0) {
    nums = +line;
  } else {
    numbers.push(+line);
  }

  rl_count += 1;
  if (rl_count > nums) {
    const avg = Math.round(
      numbers.reduce((acc, number) => acc + number / nums, 0)
    );
    console.log(avg === -0 ? 0 : avg);
    console.log(numbers.sort((a, b) => a - b)[Math.floor(nums / 2)]);
    console.log(getPopular(numbers));
    console.log(Math.max(...numbers) - Math.min(...numbers));
    rl.close();
  }
});

rl.on("close", () => {
  process.exit();
});

function getPopular(numbers) {
  const map = new Map();

  numbers.forEach((number) => {
    map.set(number, (map.get(number) || 0) + 1);
  });

  const popular_count = Math.max(...[...map].map((t) => t[1]));
  const populars = [...map]
    .filter((t, _, arr) => t[1] === popular_count)
    .sort((a, b) => b[0] - a[0]);

  return populars.length >= 2
    ? populars[populars.length - 2][0]
    : populars[0][0];
}
