// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, line = "") {
	if (n === row) {
		return;
	}

	if (n === line.length) {
		console.log(line);
		return steps(n, row + 1);
	}

	line.length <= row ? (line += "#") : (line += " ");
	steps(n, row, line);

	// for (let row = 0; row < n; row += 1) {
	// 	let line = "";
	// 	for (let col = 0; col < n; col += 1) {
	// 		col <= row ? (line += "#") : (line += " ");
	// 	}
	// 	console.log(line);
	// }
}

module.exports = steps;
