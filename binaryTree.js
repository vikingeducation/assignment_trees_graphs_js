// [8, 10, 3, 1, 6, 14, 4, 7, 13]

class Node {
  constructor(data, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
}

class BinaryTree {
  constructor(array) {
    this.root = new Node(array[0], null, null);
    this.makeTree(array.slice(1));
  }

  makeTree(array) {
    array.forEach(num => {
      this.insertNode(new Node(num), this.root);
    });
  }

  insertNode(node, parent) {
    if (parent.data > node.data) {
      if (parent.left) {
        this.insertNode(node, parent.left);
      } else {
        parent.left = node;
      }
    } else if (parent.data < node.data) {
      if (parent.right) {
        this.insertNode(node, parent.right);
      } else {
        parent.right = node;
      }
    }
    //they're equal and do nothing
  }

  printTree(queue) {
    if (!queue.length) return;
    // load the data first
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      if (queue[i] === null) {
        process.stdout.write(" null ");
        continue;
      }
      queue.push(queue[i].left);
      queue.push(queue[i].right);

      process.stdout.write(` ${queue[i].data} `);
    }
    process.stdout.write("\n");

    queue = queue.slice(length);
    this.printTree(queue);
  }

  print() {
    this.printTree([this.root]);
  }
}

const test = new BinaryTree([8, 10, 3, 1, 6, 14, 4, 7, 13]);
test.print();

/////
