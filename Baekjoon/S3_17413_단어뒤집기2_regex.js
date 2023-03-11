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
    /**
     * 정규식 내에서 |(or)를 이용해서 여러 조건에 해당하는 것들을 전부 찾고,
     * 나중에 startsWith 등을 이용해서 문자열의 일부만으로 분류할 수도 있다.
     */

    const regex = /<[a-z0-9 ]+>|[a-z0-9]+/g;
  
    const string = input();
    const answer = string.replace(regex, (s) => (s.startsWith('<') ? s : [...s].reverse().join('')));
    console.log(answer);
  }
  