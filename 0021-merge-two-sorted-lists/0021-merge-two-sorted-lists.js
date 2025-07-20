/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummyNode = new ListNode();
    let headNode = dummyNode;
    while(list1 && list2){
        if(list1.val <= list2.val){
            dummyNode.next = list1;
            list1 = list1.next;
        }else{
            dummyNode.next = list2;
            list2 = list2.next;
        }
        dummyNode = dummyNode.next;
    }
    if(list1 == null){
        dummyNode.next = list2;
    }else if(list2 == null){
        dummyNode.next = list1;
    }

    return headNode.next;
};