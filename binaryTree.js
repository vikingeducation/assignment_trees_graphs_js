class BinaryNode {
  constructor(left, right, data) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
}

class BinaryTree {
  constructor(dataArr) {
    this.rootNode = new BinaryNode(null, null, dataArr[0]);

    setNextNode(this, dataArr, this.rootNode, 1);
  }
}

function setNextNode(tree, dataArr, currentNode, currentPosition) {
  if (!dataArr[currentPosition]) return;

  if (dataArr[currentPosition] > currentNode.data) {
    if (!currentNode.right) {
      currentNode.right = new BinaryNode(null, null, dataArr[currentPosition]);
      setNextNode(tree, dataArr, tree.rootNode, currentPosition + 1);
    } else {
      setNextNode(tree, dataArr, currentNode.right, currentPosition);
    }
  } else {
    if (!currentNode.left) {
      currentNode.left = new BinaryNode(null, null, dataArr[currentPosition]);
      setNextNode(tree, dataArr, tree.rootNode, currentPosition + 1);
    } else {
      setNextNode(tree, dataArr, currentNode.left, currentPosition);
    }
  }
}

const tree = new BinaryTree([8, 10, 3, 1, 6, 14, 4, 7, 13]);
console.log(tree);
