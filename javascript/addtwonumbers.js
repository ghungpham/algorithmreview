/* You are given two non-empty linked lists representing two non-negative integers. 

The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself. 

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807. */

var addTwoNumbers = function(l1, l2) {
    let cur1 = l1
    let cur2 = l2
    let l3 = new ListNode(0)
    let cur3 = l3
    let carry = 0
    
    while (cur1 || cur2) {
        // either cur1 or cur2 has to exist or it stops

        let int1 = cur1 ? cur1.val : 0
        let int2 = cur2 ? cur2.val : 0
        let sum = int1 + int2 + carry
        carry = (sum > 9) ? 1 : 0
        cur3.next = new ListNode(sum % 10)
        cur3 = cur3.next
        if (cur1) cur1 = cur1.next
        if (cur2) cur2 = cur2.next
    }
    
    /// at the end, still need to have another 1 if the carry is still 1 

    if (carry === 1){cur3.next = new ListNode(1)}
    
    return l3.next
};
