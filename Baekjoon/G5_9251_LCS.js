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
  /**
   * 같은 문자를 만났을 때, dp[r-1][c] 값을 가져오면 해당 문자를 중복 고려하게 된다.
   * dp[r-1][c-1]로, 아직 해당 문자를 고려하지 않은 상태의 값을 가져와야 한다.
   */
  const [str1, str2] = [input().trim(), input().trim()];
  const dp = Array.from({ length: str2.length + 1 }, () =>
    Array.from({ length: str1.length + 1 }, () => 0)
  );

  for (let r = 1; r <= str2.length; r++) {
    let max_of_row = 0;
    for (let c = 1; c <= str1.length; c++) {
      dp[r][c] =
        str2[r - 1] === str1[c - 1] //
          ? dp[r - 1][c - 1] + 1
          : Math.max(max_of_row, dp[r - 1][c]);
      max_of_row = Math.max(max_of_row, dp[r][c]);
    }
  }

  console.log(dp[str2.length][str1.length]);
}
