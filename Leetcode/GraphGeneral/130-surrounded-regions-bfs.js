/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const m = board.length;
    const n = board[0].length;

    // 이 flag 변수로 조건 충족 여부 판단 후, flip or recover.
    let isSurrounded = true;
    
    for (let i = 1; i <= m - 2; i++) {
        for (let j = 1; j <= n - 2; j++) {
            if (board[i][j] !== 'O') continue;

            isSurrounded = true;
            bfs(i, j);

            if (isSurrounded) {
                // flip.
                convertDashTo('X');
            } else {
                // recover from '-' to 'O'. 
                convertDashTo('O');
            }

        }
    }
    
    function convertDashTo(to) {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === '-') {
                    board[i][j] = to;
                }
            }
        }
    }

    function bfs(sx, sy) {
        if (board[sx][sy] !== 'O') return;

        board[sx][sy] = '-';

        const delta = [
            [-1, 0], [1, 0], [0, -1], [0, 1]
        ];
        for (const [dx, dy] of delta) {
            const newX = sx + dx;
            const newY = sy + dy;
            if (0 <= newX && newX <= m - 1 &&
                0 <= newY && newY <= n - 1 === false) {
                continue;
            }

            if (board[newX][newY] === 'O') {
                if (1 <= newX && newX <= m - 2 &&
                    1 <= newY && newY <= n - 2) {
                    bfs(newX, newY);
                } else {
                    isSurrounded = false;
                    
                }
            }        

        }

    }


};