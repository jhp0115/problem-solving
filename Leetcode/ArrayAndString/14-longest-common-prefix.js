/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let end = strs[0].length - 1;

    for (let k = 1; k < strs.length; k++) {
        let curEnd = -1;
        for (let i = 0; i < strs[k].length; i++) {
            if (strs[0][i] === strs[k][i]) {
                curEnd += 1;
            } else {
                break;
            }
        }

        end = Math.min(end, curEnd);

    }

    return strs[0].substring(0, end + 1);

};