/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
   let dummyNode = new ListNode(-1);
   dummyNode.next = head;

   let curr = dummyNode;
   while(curr && curr.next){
    if(curr.next.val == val){
        curr.next = curr.next.next;
    }else{
        curr = curr.next;
    }
   }
   return dummyNode.next;
};