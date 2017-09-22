class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(iter) {
    this.root;
  }

  add(data) {
    if (!this.root) {
      this.root = new Node(data);
    } else {
      let current = this.root;
      while (current) {
        if (current.data > data && current.left) {
          current = current.left;
        } else if (current.data < data && current.right) {
          current = current.right;
        } else {
          break;
        }
      }
      current[current.data > data ? "left" : "right"] = new Node(data);
    }
  }

  display() {
    console.log(JSON.stringify(this.root, null, 2));
  }
}

const tree = new Tree();

tree.add(6);
tree.add(5);
tree.add(4);
tree.add(3);
tree.add(2);

tree.display();
