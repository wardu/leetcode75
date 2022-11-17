/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
 *
 * @param {ListNode} head
 * @return {ListNode}
 *
 *
 *
 */

const reverseList = (head) => {
  let previous = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};

module.exports = reverseList;
