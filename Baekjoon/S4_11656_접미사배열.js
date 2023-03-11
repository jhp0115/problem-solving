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
    const S = input();
    const suffixes = Array.from({ length: S.length }, (_, i) => S.slice(i));
  
    const answer = suffixes.sort((s1, s2) => s1.localeCompare(s2)).join('\n');
    console.log(answer);
  }
  