/**
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by
 * splicing together the nodes of the first two lists.
 * Return the head of the merged linked list
 *
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 *
 *
 */

const mergeTwoLists = (list1, list2) => {
  class ListNode {
    constructor(val, next) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  let head = new ListNode();
  let current = head;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1.val;
      list1 = list1.next;
    } else {
      current.next = list2.val;
      list2 = list2.next;
    }
    current = current.next;
  }
  current.next = list1 || list2;
  return head.next;
};

module.exports = mergeTwoLists;
