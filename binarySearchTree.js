class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(iter) {
    this.depth = 0;
    if (iter) {
      iter.forEach(item => {
        this.add(item);
      });
    }
    this.root;
  }

  add(data) {
    if (!this.root) {
      this.depth = 1;
      this.root = new Node(data);
    } else {
      let current = this.root;
      let depth = 0;
      while (current) {
        depth++;
        if (current.data > data && current.left) {
          current = current.left;
        } else if (current.data < data && current.right) {
          current = current.right;
        } else {
          break;
        }
      }
      this.depth = depth > this.depth ? depth : this.depth;
      current[current.data > data ? "left" : "right"] = new Node(data);
    }
  }

  display() {
    console.log(JSON.stringify(this.root, null, 2));
  }
}

const tree = new Tree([8, 10, 3, 1, 6, 14, 4, 7, 13]);

// tree.add();

// tree.add(6);
// tree.add(5);
// tree.add(4);
// tree.add(3);
// tree.add(2);

// tree.display();
console.log(tree.depth);

// {
//   "data": 8,
//   "left": {
//     "data": 3,
//     "left": {
//       "data": 1
//     },
//     "right": {
//       "data": 6,
//       "left": {
//         "data": 4
//       },
//       "right": {
//         "data": 7
//       }
//     }
//   },
//   "right": {
//     "data": 10,
//     "right": {
//       "data": 14,
//       "left": {
//         "data": 13
//       }
//     }
//   }
// }
