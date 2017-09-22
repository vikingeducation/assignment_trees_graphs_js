class BinaryNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(array) {
    this.array = array;
    this.root = new BinaryNode(this.array[0]);
  }

  addNode(value) {
    //left condition
    let currentNode;
    if (value < this.root.data) {
      this.root.left
        ? (currentNode = this.root.left)
        : (this.root.left = value);
    }
  }
}

let binary_table = new BinaryTree([6]);

binary_table.addNode(5);
binary_table.addNode(1);
console.log(binary_table.root.left);
console.log(binary_table.root.left);
