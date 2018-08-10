function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let carry = false;
    let node = new ListNode(0);
    let current = node;
    while (l1 !== null || l2 !== null) {
        current.next = new ListNode();
        current = current.next;
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry ? 1 : 0);
        carry = false;
        carry = sum >= 10 ? true : false;
        if (carry) {
            current.val = sum % 10
        } else {
            current.val = sum;
        }
        l1 = (l1 ? l1.next : null);
        l2 = (l2 ? l2.next : null);
    }

    if (carry) {
        current.next = new ListNode(1)
    }
    return node.next;
};

let a = {
    val: 1,
    next: {
        val: 8,
        next: null
    }
}
let b = {
    val: 0,
    next: null
}

console.log(addTwoNumbers(a, b));