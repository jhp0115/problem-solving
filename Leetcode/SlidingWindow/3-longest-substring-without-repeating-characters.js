/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 94ms, Beats 35.74%. 새로운 풀이 도전해보자.

    // map에 [글자, 인덱스] 쌍을 계속 기록해 나감.
    // map에 key로서 이미 있는 글자 만나면, 
    // map의 해당 글자의 인덱스에서 길이 갱신 및 카운트 재개.

    const charToIdx = new Map();

    let max = 0;
    let length = 0;

    for (let i = 0; i < s.length; i++) {
        if (charToIdx.has(s[i])) {
            const prevIdx = charToIdx.get(s[i]);
            length = i - prevIdx;
            charToIdx.set(s[i], i);
            for (const [c, v] of charToIdx) {
                if (v < prevIdx) charToIdx.delete(c);
            }
        } else {
            length += 1;
            charToIdx.set(s[i], i);
        }
        max = Math.max(max, length);

    }

    return max;

};