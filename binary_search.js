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

  removeNode(value) {
    const node = this.findValue(value);
    const parent = this.findParent(value);
  }

  pruneSubTree(node) {
    let subTree = subTree || [];
    subTree.push(node.data);
    if (!node.left && !node.right) {
      return subTree;
      if (!node.left) return this.pruneSubTree(node.right);
    } else {
      return this.pruneSubTree(node.left).concat(this.pruneSubTree(node.right));
    }
  }

  findValue(value, current = this.root) {
    if (value === current.data) return current;
    if (value < current.data) {
      if (current.left) {
        return this.findValue(value, current.left);
      } else {
        return console.log("not found");
      }
    } else {
      //right condition, current.data)
      if (current.right) {
        return this.findValue(value, current.right);
      } else {
        return console.log("not found");
      }
    }
  }

  findParent(value, current = this.root, parent = null) {
    if (value < current.data) {
      if (current.left) {
        if (value === current.left.data) return current;
        return this.findParent(value, current.left);
      } else {
        return console.log("child not found");
      }
    } else {
      //right condition
      if (current.right) {
        if (value === current.right.data) return current;
        return this.findValue(value, current.right);
      } else {
        return console.log("child not found");
      }
    }
  }
}

let binary_table = new BinaryTree([6, 4, 3, 8, 7, 9]);

console.log(binary_table.root);
// console.log(binary_table.findValue(8));
// console.log(binary_table.findParent(8));
console.log(binary_table.pruneSubTree(binary_table.findValue(6)));
console.log(binary_table.root);
