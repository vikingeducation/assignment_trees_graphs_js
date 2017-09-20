class BinaryNode {
  constructor(left, right, data) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
  setLeft(left) {
    this.left = left;
  }
  setRight(right) {
    this.right = right;
  }
}

class BinaryTree {
  constructor(array) {
    this.root = null;
    for (let i = 0; i < array.length; i++) {
      this.insertNode(this.root, array[i]);
    }
  }

  insertNode(root = this.root, data) {
    let node = new BinaryNode(null, null, data);
    if (root) {
      if (root.data < node.data) {
        if (root.right) {
          this.insertNode(root.right, node.data);
        } else {
          root.setRight(node);
        }
      } else {
        if (root.left) {
          this.insertNode(root.left, node.data);
        } else {
          root.setLeft(node);
        }
      }
    } else {
      this.root = node;
    }
  }
  maxDepth(node = this.root) {
    if (!node) {
      return 0;
    }
    return Math.max(this.maxDepth(node.left), this.maxDepth(node.right)) + 1;
  }
  printTreeAsc(node = this.root) {
    let currentNode = node;
    if (currentNode.left) {
      this.printTreeAsc(currentNode.left);
    }
    console.log(currentNode.data);
    if (currentNode.right) {
      this.printTreeAsc(currentNode.right);
    }
  }
  printTree(node = this.root) {
    let currentNode = node;
    console.log(currentNode);
    if (currentNode.left) {
      this.printTree(currentNode.left);
    }
    if (currentNode.right) {
      this.printTree(currentNode.right);
    }
  }
  printLevel(node = this.root, level = 1) {
    if (!node) {
      return "";
    }
    if (level === 1) {
      return node.data + " ";
    } else if (level > 1) {
      let leftStr = this.printLevel(node.left, level - 1);
      let rightStr = this.printLevel(node.right, level - 1);
      return leftStr + rightStr;
    } else {
      return "";
    }
  }
  print() {
    let depth = this.maxDepth(this.root);
    for (let i = 1; i <= depth; i++) {
      console.log("Level " + i + ": ");
      let nodes = this.printLevel(this.root, i);
      console.log(nodes);
    }
  }
}

const binary_tree = new BinaryTree([8, 10, 3, 1, 6, 14, 4, 7, 13]);
binary_tree.print();
