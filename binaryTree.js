// BINARY TREE

class BinaryTree {
  constructor() {
    this.right = null;
    this.left = null;
    this.data = null;
  }

  isEmpty() {
    return !this.right && !this.left;
  }


  insert(data) {
    if (!this.data) {
      this.data = data;
    } else if (data >= this.data) {
      if (!this.right) this.right = new BinaryTree();
      this.right.insert(data);
    } else {
      if (!this.left) this.left = new BinaryTree();
      this.left.insert(data);
    }
  }

  height() {
    if (this.isEmpty()) {
      return 0;
    } else {
      return 1 + Math.max(
        this.left ? this.left.height() : 0, 
        this.right ? this.right.height() : 0
      );
    }
  }


  printChildrenByLevel(node) {
    let returnArr = [];
    this._printLevel(node, 0, returnArr);

    for (let i = 0; i < returnArr.length; i++) {
      let spaceBetweenNum = Math.pow(2, returnArr.length - i);
      let spaceLeftNum = spaceBetweenNum / 2;
      let spacesBetween = new Array(spaceBetweenNum).join(" ");
      let spacesLeft = new Array(spaceLeftNum).join(" ");
      console.log(spacesLeft + returnArr[i] + spacesBetween);
    }
    return returnArr;
  }

  _printLevel(tree, level, returnArr) {
    let spacesBetweenNum;
    let spacesBetween = " ";
    for (let i = 0; i < returnArr.length; i++) {
      spacesBetweenNum = Math.pow(2, returnArr.length - i);
      spacesBetween = new Array(spacesBetweenNum).join(" ");
    }

    if (!tree) return "";
    if (tree.left) {
      if (returnArr[level]) {
        returnArr[level] += spacesBetween + tree.left.data.toString() || "";
      } else {
        returnArr[level] = tree.left.data.toString() || "";
      }
    }

    if (tree.right) {
      if (returnArr[level]) {
        returnArr[level] += spacesBetween + tree.right.data.toString() || "";
      } else {
        returnArr[level] = tree.right.data.toString() || "";
      }
    }

    if (tree.left || tree.right) {
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
binaryTest.insert(3);
binaryTest.insert(7);

console.log("height: " + binaryTest.height());
console.log(JSON.stringify(binaryTest, null, 2));
console.log(binaryTest.printChildrenByLevel(binaryTest));
