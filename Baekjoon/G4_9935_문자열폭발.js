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
     * 1. 처음에는
     * while(regex.test(string)) {string = string.replace(regex, '')}
     * 로 풀었지만 메모리 초과가 났다. 입력되는 문자열 최대 길이가 1백만 글자라서 반복적인 문자열 생성을 조심해야 한다.
     * 2. 아래는 스택에 문자를 하나씩 push할 때마다 검사해서
     * 폭발 문자열을 감지하면 pop하면서 푼 코드이다.
     */
    const string = input();
    const explosion = input();
    const result = [];
  
    for (let i = 0; i < string.length; i++) {
      result.push(string[i]);
  
      if (i < explosion.length - 1) continue;
  
      if (compareSuffix(result, explosion) === true) {
        for (let k = 0; k < explosion.length; k++) result.pop();
      }
    }
  
    console.log(result.length > 0 ? result.join('') : 'FRULA');
  }
  
  function compareSuffix(result_array, explosion) {
    for (let d = 0; d < explosion.length; d++) {
      if (explosion[d] !== result_array[result_array.length - explosion.length + d]) return false;
    }
    return true;
  }
  