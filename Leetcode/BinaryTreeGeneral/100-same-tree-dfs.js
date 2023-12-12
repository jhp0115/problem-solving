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

    // p, q 각각 DFS 수행하면서 결과를 배열에 저장.
    // 그 다음, 두 배열의 원소값 비교.

    const resultP = [];
    const resultQ = [];

    dfs(p, resultP);
    dfs(q, resultQ);

    if (resultP.length !== resultQ.length) return false;

    for (let i = 0; i < resultP.length; i++) {
        if (resultP[i] !== resultQ[i]) return false;
    }

    return true;



    function dfs(node, resultArray) {
        resultArray.push(node ? node.val : null);

        if (!node) return;

        dfs(node.left, resultArray);
        dfs(node.right, resultArray);

    }


};