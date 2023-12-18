/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    /**
    처음에는 이차원 배열 MATRIX를 만들고 실제 좌표에 각 문자를 넣어서 풀었는데,
    알고보니 좌표의 '행의 움직임'만 신경쓰면 되는 문제였다.

    두 번째로 풀 때는, 행의 인덱스값(x)을 지그재그로 움직이며 알맞은 행에 각 문자를 추가하여 풀었다.
    70ms, Beats 68.06%.
     */
    if (numRows === 1) return s;

    let x = 0;
    let dir = 1;

    const rows = Array.from({length: numRows}, () => '');

    for (const c of s) {
        rows[x] += c;
        goToNextPos();
    }

    return rows.join('');


    function goToNextPos() {
        if (x === numRows - 1) {
            dir = -1;
        }
        if (x === 0) {
            dir = 1;
        }
        x += dir;
    }
};