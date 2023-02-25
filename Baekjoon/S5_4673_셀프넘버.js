// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const not_selves = new Set();

// rl.on("line", (line) => {

// });

// rl.on("close", () => {
//   process.exit();
// });

solution();

function solution() {
  for (let i = 1; i <= 10000; i++) {
    let n = i;
    while (n <= 10000) {
      n = d(n);
      not_selves.add(n);
    }
  }

  for (let i = 1; i <= 10000; i++) {
    if (!not_selves.has(i)) {
      console.log(i);
    }
  }
}

function d(n) {
  let result = n;
  while (n > 0) {
    result += n % 10;
    n = Math.floor(n / 10);
  }
  return result;
}
