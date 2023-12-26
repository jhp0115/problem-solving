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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return dfs(root.left, root.right);


    function dfs(node1, node2) {
        if (node1 === null && node2 === null) return true;
        if (node1 === null || node2 === null) return false;
        if (node1.val !== node2.val) return false;

        // if (node1.val === node2.val)
        return dfs(node1.left, node2.right) && dfs(node2.left, node1.right);
        
    }

};