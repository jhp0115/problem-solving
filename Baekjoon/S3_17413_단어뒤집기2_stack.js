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
    const string = input();
    const main_stack = [];
    const temp_stack = [];
  
    let mode = 1; // 0: 일반, 1: 뒤집기 모드
  
    for (let i = 0; i < string.length; i++) {
      let next_mode = mode;
      if (string[i] === '<') {
        next_mode = 0;
      }
      if (string[i] === '>') {
        next_mode = 1;
      }
  
      if (mode === 0) {
        main_stack.push(string[i]);
      } else {
        if (string[i] === ' ' || string[i] === '<') {
          while (temp_stack.length > 0) {
            main_stack.push(temp_stack.pop());
          }
          main_stack.push(string[i]);
        } else if (i === string.length - 1) {
          main_stack.push(string[i]);
          while (temp_stack.length > 0) {
            main_stack.push(temp_stack.pop());
          }
        } else {
          temp_stack.push(string[i]);
        }
      }
  
      mode = next_mode;
    }
  
    console.log(main_stack.join(''));
  }
  