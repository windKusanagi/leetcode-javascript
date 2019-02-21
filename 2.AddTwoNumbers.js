/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
	const res = new ListNode(0);
	let p = res;
	let carry = 0;
	while (l1 || l2) {
		let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
		carry = (sum / 10) | 0;
		p.next = new ListNode(sum % 10);
		p = p.next;
		if (l1) l1 = l1.next;
		if (l2) l2 = l2.next;
	}
	if (carry) p.next = new ListNode(carry);
	return res.next;
};
