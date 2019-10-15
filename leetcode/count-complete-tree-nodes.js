/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  let queue = [root];
  let vals = [];

  const func = n => vals.push(n);

  while (queue.length) {
    let curr = queue.shift();
    if (!curr) {
      return [];
    }

    if (curr.left) {
      queue.push(curr.left);
    }

    if (curr.right) {
      queue.push(curr.right);
    }

    func(curr.val);
  }

  return vals.length;
};