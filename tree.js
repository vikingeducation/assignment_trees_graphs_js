// Set up a root node
class Node {
  constructor(data, left = null, right = null) {
    (this.left = left), (this.right = right), (this.data = data);
  }

  insert(node) {
    if (node.data < this.data) {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.insert(node);
      }
    }
    if (node.data >= this.data) {
      if (this.right === null) {
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

  inspect(node = this.rootNode) {
    return node.left === null && node.right === null
      ? ` ${node.data}`
      : node.left === null
        ? `\n${node.data} \n \t ${this.inspect(node.right)}`
        : node.right === null
          ? `\n ${node.data} \n ${this.inspect(node.left)} \t`
          : `${node.data} \n ${this.inspect(node.left)} ${this.inspect(
              node.right
            )}`;
  }
}

let test = new BinaryTree([8, 10, 3, 1, 6, 14, 4, 7, 13]);
console.log(test.inspect());
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
