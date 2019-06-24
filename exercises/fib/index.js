// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
	const cache = {};
	return function(...args) {
		if (cache[args]) {
			return cache[args];
		}
		const result = fn(...args);
		cache[args] = result;

		return result;
	};
}

const fib = memoize(fibSlow);

function fibSlow(n) {
	// RECURSIVE SOLUTION

	if (n < 2) {
		return n;
	}

	return fib(n - 1) + fib(n - 2);

	// ITERATIVE SOLUTION

	// if (n === 0) {
	// 	return 0;
	// }
	// if (n <= 2) {
	// 	return 1;
	// }
	// let a = 0;
	// let b = 1;
	// let c = a + b;
	// for (let i = 2; i < n; i += 1) {
	// 	a = b;
	// 	b = c;
	// 	c = a + b;
	// }
	// return c;
}

module.exports = fib;
