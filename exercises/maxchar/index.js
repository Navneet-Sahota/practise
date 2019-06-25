// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const charMap = new Map();
	let max = 0;
	let maxChar = "";
	for (const char of str) {
		if (!charMap.has(char)) {
			charMap.set(char, 1);
		} else {
			let newValue = charMap.get(char) + 1;
			if (max < newValue) {
				max = newValue;
				maxChar = char;
			}
			charMap.set(char, newValue);
		}
	}
	return maxChar;
}
module.exports = maxChar;
