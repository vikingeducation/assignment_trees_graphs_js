// Your job is to build a Binary Search Tree out of a simple array of data and then display it to the screen.

// Build your tree from the array.
// Verify that the tree works by outputting it in the simplest possible fashion and inspecting that output for accuracy. You might try copying the inspect output of your tree into a text editor and manually formatting it properly.
// (Optional) Clean up the output to show a prettier tree like the one below (this is actually pretty challenging)

// Your tree:
//           8
//       /       \
//     3          10
//  /      \         \
// 1        6         14
//       /    \      /
//      4      7   13





class Node {
  constructor(value){
    this.value = value
    this.leftPointer = null
    this.rightPointer = null
  }
}
class BinaryTree {
  constructor(values){
    this.rootNode = null
    this.assignNodes(values)
    this.print()
  }

  assignLeftNode(currentNode, leftNode){
    currentNode.leftPointer = leftNode
  }

  assignRightNode(currentNode, rightNode){
    currentNode.rightPointer = rightNode
  }

  assignRootNode(values){
    var unassignedNodes = []

    values.forEach(function(value, index) {
      unassignedNodes.push(new Node(value))
    });
    var root = this.rootNode = unassignedNodes.shift()

    var nextTwo = []
      nextTwo.push(unassignedNodes.shift())
      nextTwo.push(unassignedNodes.shift())

    nextTwo.forEach(function(node) {
      if(node.value < root.value){
        this.assignLeftNode(root, value)
      } else {
        this.assignRightNode(root, value)
      }
    });

    this.rootNode = root
    console.log(this.rootNode);
    // console.log(unassignedNodes);
  }

  assignNodes(values){
    this.assignRootNode(values)
  }



  print(){
    console.log(this.rootNode);
  }
}

const binary_tree = new BinaryTree([8, 10, 3, 1, 6, 14, 4, 7, 13]);


// binary_tree.print()
