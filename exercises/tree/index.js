// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	add(data) {
		this.children.push(new Node(data));
	}

	remove(data) {
		const index = this.children.indexOf(data);
		this.children.splice(index, 1);
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	traverseBF(fn) {
		const buffer = [this.root];

		while (buffer.length) {
			let node = buffer.shift();
			buffer.push(...node.children);
			fn(node);
		}
	}

	traverseDF(fn) {
		const buffer = [this.root];

		while (buffer.length) {
			let node = buffer.shift();
			buffer.unshift(...node.children);
			fn(node);
		}
	}
}

module.exports = { Tree, Node };
