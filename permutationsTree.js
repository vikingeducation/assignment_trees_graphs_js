class Node {
	constructor(value) {
		this.value = value;
		this.children = [];
	}
}

class PermutationsTree {
	constructor(str) {
		this.root = new Node();
		this.populate(this.root, str.split(''));
	}

	populate(parent, arr) {
		if (arr.length < 2) {
			parent.children = [new Node(arr[0])];
			return parent;
		}

		parent.children = arr.map((item, index) =>
			this.populate(new Node(item), [
				...arr.slice(0, index),
				...arr.slice(index + 1)
			])
		);

		return parent;
	}
}

const perm = new PermutationsTree('abc');

console.log(JSON.stringify(perm.root, null, 2));

// let testarr = [3, 4, 2, 5, 6];

// console.log(
// 	testarr.map((item, index) => {
// 		const rest = [...testarr.slice(0, index), ...testarr.slice(index + 1)];
// 		console.log(item, ' : ', rest);
// 	})
// );

// 3 ' : ' [ 4, 2, 5, 6 ]
// 4 ' : ' [ 3, 2, 5, 6 ]
// 2 ' : ' [ 3, 4, 5, 6 ]
// 5 ' : ' [ 3, 4, 2, 6 ]
// 6 ' : ' [ 3, 4, 2, 5 ]

const permutations = arr => {
	return arr.length < 2
		? arr
		: arr.reduce((acc, element, index) => {
				const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
				const combos = permutations(rest).map(c => [element, ...c]);
				return [...acc, ...combos];
			}, []);
};
