/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    let result = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                result += 1;
                bfs(i, j);
            }
            
        }
    }

    return result;

    // 섬 하나의 1들을 2로 바꾼다.
    function bfs(sx, sy) {
        grid[sx][sy] = '2';

        const delta = [
            [-1, 0], [1, 0], [0, 1], [0, -1]
        ];

        for (const [dx, dy] of delta) {
            const newX = sx + dx;
            const newY = sy + dy;
            if (0 <= newX && newX < m &&
                0 <= newY && newY < n &&
                grid[newX][newY] === '1') {
                bfs(newX, newY);
            }

        }


    }

};