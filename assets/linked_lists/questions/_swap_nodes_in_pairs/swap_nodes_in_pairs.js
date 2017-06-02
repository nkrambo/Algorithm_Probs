
/**
* Swap Pairs
*
* Tags: Linked List
* Leetcode: 24
*
* Given a linked list, swap every two adjacent nodes and return its head.
*
* Example:
*
* Given 1 → 2 → 3 → 4
* Return 2 → 1 → 4 → 3
*
* Your algorithm should use only constant space. You may not modify the values
* in the list, only nodes itself can be changed.
*/

/**
* swapPairsRecursive()
*
* Solution:
*
* We can solve this one recusively.
*
* Time: O(n)
* Space: O(1)
*
* @param {object} head linked list head node
* @return {object} returns the same modified list head node
*/

// function swapPairsRecursive(head) {
//   // base
//   if (head === null || head.next === null) return head;
//
//   // cache new head
//   const newHead = head.next;
//
//   head.next = swapPairsRecursive(head.next.next);
//   newHead.next = head;
//   return newHead;
// }

/**
* swapPairs()
*
* Solution:
*
* This is the iterative solution to this problem.
*
* Time: O(n)
* Space: O(1)
*
* @param {object} head linked list head node
* @return {object} returns the same modified list head node
*/

// function swapPairs(head) {
//   if (head == null || head.next == null) return head;
//
//   let cur = head;
//   const newHead = head.next;
//   while (cur !== null && cur.next !== null) {
//     const temp = cur;
//     cur = cur.next;
//     temp.next = cur.next;
//     cur.next = temp;
//     cur = temp.next;
//     if (cur !== null && cur.next !== null) temp.next = cur.next;
//   }
//
//   return newHead;
// }
//
// export { swapPairsRecursive, swapPairs };