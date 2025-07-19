/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyNode = new ListNode();
    let currNode = dummyNode;
    let curry = 0;
    while(l1 || l2 || curry){
        let sum = (l1?.val || 0 ) + (l2?.val ||  0)+ curry;
        curry = Math.floor(sum / 10);
        let digit = sum % 10;
        let newNode = new ListNode(digit);
        currNode.next = newNode;
        currNode = currNode.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    return dummyNode.next;

};