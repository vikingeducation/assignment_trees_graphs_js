// Set up a root node
class Node {
  constructor(data, left = null, right = null) {
    this.children = children;
    (this.left = left), (this.right = right), (this.data = data);
  }

  insert(node) {
    if (node.data < this.data) {
      if (node.left === null) {
        this.left = node;
      } else {
        this.left.insert(node);
      }
    }
    if (node.data >= this.data) {
      if (node.right === null) {
        this.right = node;
      } else {
        this.right.insert(node);
      }
    }
  }
}

class BinaryTree {
  constructor(input) {
    this.rootNode = new Node(input[0]);
    input.slice(1).map(node => {
      this.rootNode.insert(new Node(node));
    });
  }
}

new BinaryTree([8, 10, 3, 1, 6, 14, 4, 7, 13]);
// Your tree:
//
// // Your tree:
//           8
//       /       \
//     3          10
//  /      \         \
// 1        6         14
//       /    \      /
//      4      7   13
