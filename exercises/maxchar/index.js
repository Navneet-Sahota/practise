// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const myMap = new Map();
	let max = 0;
	let maxChar = "";
	for (let char of str) {
		if (!myMap.has(char)) {
			myMap.set(char, 1);
		} else {
			myMap.set(char, myMap.get(char) + 1);
		}
	}
	for (let [char, freq] of myMap) {
		if (max < freq) {
			max = freq;
			maxChar = char;
		}
	}
	return maxChar;
}
module.exports = maxChar;
