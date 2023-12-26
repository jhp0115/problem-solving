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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root;
    
    swapChild(root);
    return root;


    function swapChild(node) {

        // left, right swap
        const temp = node.left;
        node.left = node.right;
        node.right = temp;

        // left, right 재귀 호출.
        node.left && swapChild(node.left);
        node.right && swapChild(node.right);

    }

};