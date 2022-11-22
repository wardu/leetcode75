/**
 *
 *
 * Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
 * Nary-Tree input serialization is represented in their level order traversal. Each group
 * of children is separated by the null value (See examples)
 *
 *
 *
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 *
 *
 *
 * @param {Node|null} root
 * @return {number[]}
 *
 *
 *
 */
const preorder = (root) => {
  let result = [];

  const findChildren = (currentNode) => {
    if (!currentNode) return;

    result.push(currentNode.val);
    for (let child of currentNode.children) {
      findChildren(child);
    }
  };

  findChildren(root);

  return result;
};

module.exports = preorder;
