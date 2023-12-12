/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    // p, q 각각 BFS 수행하면서 결과를 배열에 저장.
    // 그 다음, 두 배열의 원소값 비교.

    const resultP = bfs(p);
    const resultQ = bfs(q);

    if (resultP.length !== resultQ.length) return false;

    for (let i = 0; i < resultP.length; i++) {
        if (resultP[i] !== resultQ[i]) {
            return false;
        }
    }

    return true;


    function bfs(root) {
        const result = [];
        if (!root) return result;

        const queue = [root];
        while (queue.length >= 1) {
            const cur = queue.shift();
            result.push(cur === null ? null : cur.val);
            
            if (cur) {
                // 자식 배치가 [null, 숫자]인지 [숫자, null]인지도 구분해야 하므로,
                // 자식이 null일 때도 큐에 넣는다.
                queue.push(cur.left);
                queue.push(cur.right);
            }

        }

        return result;

    }


};