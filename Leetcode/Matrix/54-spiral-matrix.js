/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    // 43ms. Beats 91.01%.

    // pos 변수는 현재 좌표, dir은 좌표 이동을 위한 방향 벡터.
    // (pos + dir)이 새로 이동할 좌표. 
    // 새로 이동할 좌표가 matrix를 벗어나거나 이미 방문했던 곳이면 dir의 방향을 
    // 시계 방향으로 90도 회전한 후 새 좌표로 이동하며 원소값을 읽는다.

    const m = matrix.length;
    const n = matrix[0].length;

    const dir = [0, 1];
    const pos = [0, -1];

    const result = [];
    
    for (let i = 0; i < m * n; i++) {
        const nextX = pos[0] + dir[0];
        const nextY = pos[1] + dir[1];

        const isInMatrix = (0 <= nextX && nextX < m && 0 <= nextY && nextY < n);
        if (isInMatrix === false ||
            (isInMatrix && matrix[nextX][nextY] === '')) {
            rotateDirClock90();
        }

        pos[0] += dir[0];
        pos[1] += dir[1];

        result.push(matrix[pos[0]][pos[1]]);
        matrix[pos[0]][pos[1]] = '';
    }

    return result;



    function rotateDirClock90() {
        if (dir[0] === 0 && dir[1] === 1) {
            dir[0] = 1;
            dir[1] = 0;
        } else if (dir[0] === 1 && dir[1] === 0) {
            dir[0] = 0;
            dir[1] = -1;
        } else if (dir[0] === 0 && dir[1] === -1) {
            dir[0] = -1;
            dir[1] = 0;
        } else {
            dir[0] = 0;
            dir[1] = 1;
        }
    }


};