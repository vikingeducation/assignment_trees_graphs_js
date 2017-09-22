class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(array) {
    this.array = array;
    this.root = new Node(this.array.shift());
    //    this.addNode = this.addNode.bind(this)
    while (this.array.length) {
      this.addNode(this.array.shift());
    }
  }

  addNode(value, current = this.root) {
    //left condition
    if (value < current.data) {
      if (current.left) {
        this.addNode(value, current.left);
      }
      return (current.left = new Node(value));
    } else {
      //right condition
      if (current.right) {
        this.addNode(value, current.right);
      }
      return (current.right = new Node(value));
    }
  }
}
/* 
          6
        /  \
        4   9
      /
    3
  / \
  1  5  
*/
let binary_table = new BinaryTree([6, 4, 3]);

binary_table.addNode(5);
binary_table.addNode(1);
binary_table.addNode(9);

console.log(binary_table.root);
console.log(binary_table.root.left);
console.log(binary_table.root.right);
console.log(binary_table.root.left.left);
console.log(binary_table.root.left.right);
console.log(binary_table.root.left.left);
console.log("6, 4, 9, 3, 5, 1");
