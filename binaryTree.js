// BINARY TREE

class BinaryNode {
  constructor() {
    this.right = null;
    this.left = null;
    this.data = null;
  }
}


class BinaryTree {
  constructor() {
    this.right = null;
    this.left = null;
    this.data = null;
  }

  isEmpty() {
    return this.right && this.left;
  }

  belongsOnTheRight(data) {
    return this.right.data >= data;
  }

  insert(data) {
    if (!this.data) {
      this.data = data;
    } else if (data >= this.data) {
      this.right = new BinaryTree();
      this.right.insert(data);
    } else {
      this.left = new BinaryTree();
      this.left.insert(data);
    }
  }
 
    printChildrenByLevel(node) {
      let returnArr = [];
      this._printLevel(node, 0, returnArr);
      return returnArr;
    }

    _printLevel(tree, level, returnArr) {
      console.log("------------------- START tree.left, tree.right -------------------");
      console.log(tree.left, tree.right);
      console.log("-------------------- END tree.left, tree.right --------------------");
      
      if (tree.left || tree.right) {
        if (returnArr[level]) {
          returnArr[level] += tree.left || "";
          returnArr[level] += tree.right || "";
        } else {
          returnArr[level] = tree.left || "";
          returnArr[level] = tree.right || "";
        }
        let children = [tree.left, tree.right];
        children.forEach(child => {
          return this._printLevel(child, level + 1, returnArr);
        });
      }
      return "";
    }


     
}

let binaryTest = new BinaryTree();
binaryTest.insert(4);
binaryTest.insert(2);
binaryTest.insert(5);
binaryTest.insert(1);
binaryTest.insert(8);
console.log(JSON.stringify(binaryTest, null, 2));
console.log(binaryTest.printChildrenByLevel(binaryTest));

