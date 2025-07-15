/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let hashStore = new Set();
    let currB = headB;
    while(currB){
        hashStore.add(currB)
        currB = currB.next;
    }
    let currA = headA
    while(currA){
        if(hashStore.has(currA)){
          return currA
        }
        currA = currA.next
    }
    return null
};