// [8, 10, 3, 1, 6, 14, 4, 7, 13]

class Node {
  constructor(data, left = null, right = null) {
    this.left = left;
    this.right = right;
    thid.data = data;
  }
}

class BinaryTree {
  constructor(array) {
    this.root = new Node(array[0], null, null);
    makeTree(array.slice(1));
  }
  makeTree(array) {
    //
    array.forEach(num => {
      // const node = new Node(num);
      insertNode(new Node(num), this.root);
      // insertNode(node, this.root);
    });
  }
  insertNode(node, parent) {
    if (parent.data > node.data) {
      if (parent.left) {
        insertNode(node, parent.left);
      } else {
        //set
        parent.left = node;
      }
    } else if (parent.data < node.data) {
      if (parent.right) {
        insertNode(node, parent.right);
      } else {
        parent.right = node;
      }
    } else {
      //they're equal and do nothing
    }
  }
}

const test = () => {};

/////
