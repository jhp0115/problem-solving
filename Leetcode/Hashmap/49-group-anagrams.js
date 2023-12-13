/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    /**
    strs.map으로 각 원소 str를 사전순 정렬된 사본 생성: sortedStrs

    for문으로 2차원 배열인 result에 
    1차원 배열 [strs[i]]를 push하거나
    기존에 추가되었던 배열에 strs[i]를 push한다.

    strToIdx라는 Map으로 인덱스를 가져와서 result의 몇 번째 원소에 push할지 정한다.
     */
    const result = [];
    const strToIdx = new Map();

    const sortedStrs = strs.map(str => [...str].sort().join(''));

    for (let i = 0; i < strs.length; i++) {
        if (strToIdx.has(sortedStrs[i])) {
            result[strToIdx.get(sortedStrs[i])].push(strs[i]);

        } else {
            strToIdx.set(sortedStrs[i], result.length);
            result.push([strs[i]]);
        }
        
    }

    return result;

};