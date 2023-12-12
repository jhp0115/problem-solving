/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

    return dfs(root);

    // node가 null이면 0 반환.
    // 그렇지 않으면 (자신 노드 기준으로 단말 자손의 깊이) + 1 반환.
    function dfs(node) {
        if (!node) return 0;

        const leftDepth = dfs(node.left);
        const rightDepth = dfs(node.right);
        
        return Math.max(leftDepth, rightDepth) + 1;

    }

};