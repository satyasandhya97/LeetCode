/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head) return head;
    
    let prev = head;
    let temp = head.next;

    while(temp){
        if(temp.val === prev.val){
           temp = temp.next;
           continue; 
        }
        prev.next = temp;
        prev = temp;
        temp = temp.next;
    }
    prev.next = null;
    return head;
};