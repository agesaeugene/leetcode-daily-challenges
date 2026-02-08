var isBalanced = function(root) {

    function height(node) {
    if (node === null) return 0;

    // Get height of all subtrees
    let left = height(node.left);
    if (left === -1) return -1;

    let right = height(node.right);
    if (right === -1) return -1;

    // Check if the current node is balanced
    if (Math.abs(left - right) > 1) return -1;

    // Return the height of the current node
    return 1 + Math.max(left, right);
}

return height(root) !== -1;

};