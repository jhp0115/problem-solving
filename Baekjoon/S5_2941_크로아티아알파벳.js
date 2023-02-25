const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
  rl.close();
});

rl.on("close", () => {
  process.exit();
});

function solution(word) {
  const croatia_alphabets = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

  for (const alphabet of croatia_alphabets) {
    word = word.replace(new RegExp(alphabet, "g"), "A");
  }

  return word.length;
}
