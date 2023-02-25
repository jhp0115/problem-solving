const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let readline_count = 0;
let word_nums;
let cnt_gw = 0;

rl.on("line", (line) => {
  if (readline_count === 0) {
    word_nums = +line;
  } else if (readline_count <= word_nums) {
    cnt_gw += isGroupWord(line);
  }

  readline_count += 1;
  if (readline_count > word_nums) {
    console.log(cnt_gw);
    rl.close();
  }
  //
});

rl.on("close", () => {
  process.exit();
});

function isGroupWord(word) {
  const already_char = new Set();

  let prev = word[0];
  already_char.add(word[0]);

  for (let i = 1; i < word.length; i++) {
    if (prev !== word[i]) {
      prev = word[i];

      if (already_char.has(word[i])) {
        return false;
      } else {
        already_char.add(word[i]);
      }
    }
  }

  return true;
}
