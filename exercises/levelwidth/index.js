// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	const buffer = [root, "children"];
	const result = [];
	let counter = 0;

	while (buffer.length > 1) {
		let node = buffer.shift();
		counter += 1;
		if (buffer[0] === "children") {
			result.push(counter);
			counter = 0;
			buffer.push(...node.children);
			buffer.push(buffer.shift());
		} else {
			buffer.push(...node.children);
		}
	}
	return result;
}

module.exports = levelWidth;
