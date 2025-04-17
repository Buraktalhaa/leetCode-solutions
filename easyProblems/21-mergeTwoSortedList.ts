class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {    
    let dummy = new ListNode(0); 
    let current = dummy;
    
    while(list1 !== null && list2 !== null){
        if(list1.val <= list2.val){
            current.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            current.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        current = current.next;
    }
    
    if(list1 !== null){
        current.next = list1;
    } else if(list2 !== null){
        current.next = list2;
    }

    return dummy.next;
}