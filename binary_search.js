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
      } else {
        current.left = new Node(value);
      }
    } else {
      //right condition
      if (current.right) {
        this.addNode(value, current.right);
      } else {
        return (current.right = new Node(value));
      }
    }
  }

  removeNode(node) {}

  findValue(value, current = this.root) {
    if ((value = current.value)) return current;
    if (value < current.data) {
      if (current.left) {
        this.findValue(value, current.left);
      } else {
        return console.log("not found");
      }
    } else {
      //right condition
      if (current.right) {
        this.findValue(value, current.right);
      } else {
        return console.log("not found");
      }
    }
  }
}

let binary_table = new BinaryTree([6, 4, 3, 8, 7, 9]);

console.log(this.root);
console.log(binary_table.findValue(8));
