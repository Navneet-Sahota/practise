// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	stringA = stringA
		.replace(/\W/g, "")
		.toLowerCase()
		.split("")
		.sort()
		.join("");
	stringB = stringB
		.replace(/\W/g, "")
		.toLowerCase()
		.split("")
		.sort()
		.join("");

	if (stringA === stringB) {
		return true;
	}
	return false;

	// Alternate Method

	// stringA = stringA.replace(/\W/g, "").toLowerCase();
	// stringB = stringB.replace(/\W/g, "").toLowerCase();
	// if (stringA.length !== stringB.length) {
	// 	return false;
	// }
	// const stringAMap = new Map();
	// const stringBMap = new Map();

	// populateMap(stringAMap, stringA);
	// populateMap(stringBMap, stringB);

	// if (stringAMap.size !== stringBMap.size) {
	// 	return false;
	// }

	// for (let [key] of stringAMap) {
	// 	if (!stringAMap.get(key) === stringBMap.get(key)) {
	// 		return false;
	// 	}
	// }

	// return true;
}

// function populateMap(map, string) {
// 	for (let char of string) {
// 		if (!map.has(char)) {
// 			map.set(char, 1);
// 		} else {
// 			map.set(char, map.get(char) + 1);
// 		}
// 	}
// }

module.exports = anagrams;
