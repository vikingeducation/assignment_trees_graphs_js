class BinaryNode {
  constructor(left, right, data) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(nodes) {
    this.constructTree(nodes);
  }

  constructTree(nodes) {
    this.rootNode = new BinaryNode(null, null, nodes[0]);

    for (let i = 1; i < nodes.length; i++) {
      this.insertNode(nodes[i]);
    }
  }

  insertNode(node) {
    let currentNode = this.rootNode;
    let parentNode = currentNode;

    while (currentNode !== null) {
      if (node < currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (node > currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }

    if (node < parentNode.data) {
      parentNode.left = new BinaryNode(null, null, node);
    } else if (node > parentNode.data) {
      parentNode.right = new BinaryNode(null, null, node);
    }
  }
}

let binaryTree = new BinaryTree([8, 10, 3, 1, 6, 14, 4, 7, 13]);

console.log(JSON.stringify(binaryTree, null, 2));
