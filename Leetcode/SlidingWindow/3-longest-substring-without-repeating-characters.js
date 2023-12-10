/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 59ms, Beats 96.80%.
    // for of Map문을 get과 비교 연산자로 교체했다.
    // 시간 복잡도 O(N)

    // map에 [글자, 인덱스] 쌍을 계속 기록해 나감.
    // map에 key로서 이미 있는 글자 만나면, 
    // map의 해당 글자의 인덱스에서 길이 갱신 및 카운트 재개.

    const charToIdx = new Map();

    let max = 0;
    let length = 0;
    let prevStartIdx = -1;

    for (let i = 0; i < s.length; i++) {
        if (charToIdx.has(s[i]) && charToIdx.get(s[i]) >= prevStartIdx) {
            prevStartIdx = charToIdx.get(s[i]);
            length = i - prevStartIdx;
            charToIdx.set(s[i], i);
        } else {
            length += 1;
            charToIdx.set(s[i], i);
        }
        max = Math.max(max, length);

    }

    return max;

};