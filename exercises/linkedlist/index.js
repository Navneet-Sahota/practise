// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		// this.head = new Node(data, this.head);
		this.insertAt(data, 0);
	}

	size() {
		let counter = 0;
		let node = this.head;
		while (node) {
			counter += 1;
			node = node.next;
		}
		return counter;
	}

	getFirst() {
		// return this.head;
		return this.getAt(0);
	}

	getLast() {
		// if (!this.head) {
		// 	return null;
		// }

		// let node = this.head;
		// while (node.next) {
		// 	node = node.next;
		// }
		// return node;
		return this.getAt(this.size() - 1);
	}

	clear() {
		return (this.head = null);
	}

	removeFirst() {
		// if (!this.head) {
		// 	return;
		// }
		// this.head = this.head.next;
		this.removeAt(0);
	}

	removeLast() {
		// if (!this.head) {
		// 	return null;
		// }

		// if (!this.head.next) {
		// 	this.head = null;
		// 	return;
		// }

		// let prev = this.head;
		// let node = this.head.next;

		// while (node.next) {
		// 	prev = prev.next;
		// 	node = node.next;
		// }
		// prev.next = null;
		this.removeAt(this.size() - 1);
	}

	insertLast(data) {
		// const last = this.getLast();
		// if (last) {
		// 	last.next = new Node(data);
		// } else {
		// 	this.head = new Node(data);
		// }
		this.insertAt(data, this.size());
	}

	getAt(index) {
		let counter = 0;
		let node = this.head;
		while (node && counter < index) {
			counter += 1;
			node = node.next;
		}
		return node;
	}

	removeAt(index) {
		if (!this.head) {
			return;
		}
		if (index === 0) {
			this.head = this.head.next;
			return;
		} else {
			let prev = this.getAt(index - 1);
			if (!prev || !prev.next) {
				return;
			}
			prev.next = prev.next.next;
		}
	}

	insertAt(data, index) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}
		if (index === 0) {
			this.head = new Node(data, this.head);
			return;
		}
		let prev = this.getAt(index - 1) || this.getLast();
		let node = new Node(data, prev.next);
		prev.next = node;
	}

	forEach(fn) {
		let node = this.head;
		let counter = 0;
		while (node) {
			fn(node, counter);
			node = node.next;
			counter += 1;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while (node) {
			yield node;
			node = node.next;
		}
	}
}

module.exports = { Node, LinkedList };
