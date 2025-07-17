/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyNode = new ListNode();
    dummyNode.next = head;

    let ptr1 = dummyNode;
    let ptr2 = dummyNode;

    for(let i =0; i  < n; i++){
        ptr2 = ptr2.next
    }
    while(ptr2.next){
        ptr1 = ptr1.next;
        ptr2 = ptr2.next
    }
    ptr1.next = ptr1.next.next;
    return dummyNode.next;
};