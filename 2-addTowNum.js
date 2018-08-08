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
        const sum = l1.val + l2.val + (carry ? 1 : 0);
        carry = sum >= 10 ? true : false;
        if (carry) {
            carry = false;
            current.val = sum % 10
        } else {
            current.val = sum;
        }
        l1 = l1.next;
        l2 = l2.next;
    }

    if (carry) {
        current.next = new ListNode(1)
    }
    return node.next;
};

let a = {
    val: 1,
    next: null
}
let b = {
    val: 8,
    next: null
}

console.log(addTwoNumbers(a, b));