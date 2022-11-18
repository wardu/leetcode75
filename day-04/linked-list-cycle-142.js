/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 *
 *
 *
 */
const detectCycle = (head) => {
  let tortoise = head;
  let hare = head;

  while (hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;

    if (tortoise === hare) {
      tortoise = head;

      while (tortoise !== hare) {
        tortoise = tortoise.next;
        hare = hare.next;
      }
      return tortoise;
    }
  }
  return -1;
};

module.exports = detectCycle;
