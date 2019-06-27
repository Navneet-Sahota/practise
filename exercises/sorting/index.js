// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i += 1) {
		let swapped = false;
		for (let j = 0; j < arr.length - i - 1; j += 1) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swapped = true;
			}
		}
		if (!swapped) {
			break;
		}
	}
	return arr;
}

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i += 1) {
		let minIndex = i;
		for (let j = i + 1; j < arr.length; j += 1) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		if (minIndex !== i) {
			let temp = arr[minIndex];
			arr[minIndex] = arr[i];
			arr[i] = temp;
		}
	}
	return arr;
}

function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	}
	const center = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, center));
	const right = mergeSort(arr.slice(center));
	return merge(left, right);
}

function merge(left, right) {
	const results = [];
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}
	return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
