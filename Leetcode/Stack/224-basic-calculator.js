/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {

    // 정규식으로 접근..
    // 풀리기는 하지만 오래 걸리는 풀이가 만들어졌다.

    let t = s.replace(/\s/g, '');
    
    while((/\(/g).test(t) === true) {
        t = t.replace(/\([\d+-]+\)/g, (str) => {
            //console.log(str, calc(str))
            return calc(str);
        });
        t = t.replace(/\-\-/g, '+');
        t = t.replace(/\+\-/g, '-');
        
    }
    
    return(calc(`(${t})`))
};

function calc(str) {
    const mStr = str.substring(1, str.length - 1).replace(/-/g, '-0');

    let result = 0;
    const operands = mStr.match(/\d+/g);
    const operators = mStr.match(/[+-]/g);

    let orIdx = 0;
    let otIdx = 0;

    if (mStr[0] !== '-') {
        result += +operands[0];
        orIdx = 1;
    }

    while (orIdx < operands.length && otIdx < operators.length) {
        
        if (operators[otIdx] === '+') {
            result += +operands[orIdx];
        } else {
            result -= +operands[orIdx];
        }
        orIdx += 1;
        otIdx += 1;
        

    }

    return result;

}