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
    // removes node and reassigns its children
    const node = this.findValue(value);
    const parent = this.findParent(value);
    console.log(this.mapSubTree(node))
    let children = this.mapSubTree(node).filter(child=>{
      return child !== value
    })
    console.log(children)
    if (parent.left===node) {
      parent.left = null;
    }
    if (parent.right===node) {
      parent.right = null;
    }
    while (children.length) {
      this.addNode(children.shift());
    }
  }

  mapSubTree(node, subTree=[]) {
    subTree.push(node.data);
    if (!node.left && !node.right) {
      return subTree;
    } 
    if (!node.right) return this.mapSubTree(node.left, subTree);
    if (!node.left) return this.mapSubTree(node.right, subTree);
    return this.mapSubTree(node.left).concat(this.mapSubTree(node.right)).concat(subTree);
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

// console.log(binary_table.root);
// console.log(binary_table.findValue(8));
// console.log(binary_table.findParent(8));
// console.log(binary_table.mapSubTree(binary_table.findValue(8)));
binary_table.removeNode(8);
console.log(binary_table.root);
