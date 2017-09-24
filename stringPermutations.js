class Node {
  constructor(data, children = []) {
    this.children = children;
    this.data = data;
    // this.depth = depth;
  }
}

// mark[(m[(a, r, k)], a[(m, r, k)], r, k)];

class Tree {
  constructor(array) {
    this.root = this.makeChildren(array);
    this.makeTree(array.slice(1));
  }

  makeChildren(array, node) {
    node = array.map(
      char =>
        new Node({
          char,
          children: array.filter(character => character !== char)
        })
    );
  }

  makeTree(array) {
    if(!array.length) return;
    array.
  }

  insertNode(node, parent) {
    if (parent.data > node.data) {
      if (parent.left) {
        this.insertNode(node, parent.left);
      } else {
        parent.left = node;
        node.depth = parent.depth + 1; ///set depth
        if (this.maxDepth < node.depth) this.maxDepth = node.depth;
      }
    } else if (parent.data < node.data) {
      if (parent.right) {
        this.insertNode(node, parent.right);
      } else {
        parent.right = node;
        node.depth = parent.depth + 1; ///set depth
        if (this.maxDepth < node.depth) this.maxDepth = node.depth;
      }
    }
    //they're equal and do nothing
  }

  printTree(queue) {
    const allNull = queue.every(node => node === null);
    if (allNull) return;

    const numChildren = (this.depth - 1) ** 2;
    const depth = Math.log2(queue.length) + 1;
    // const tab = this.maxDepth / (numChildren * 2);
    // const tab = 2 ** this.maxDepth / 2 ** depth;
    // const tab = 2 ** (this.maxDepth - depth);
    let tab = this.maxDepth - depth + 1;
    // load the data first

    let length = queue.length;
    // console.log("tab = ", tab, "depth = ", depth, " max = ", this.maxDepth);
    for (let i = 0; i < length; i++) {
      if (i === 0) tab--;
      if (i === 1) tab++;
      if (queue[i] === null) {
        process.stdout.write(`${"\t".repeat(tab)} null `);
        queue.push(null, null);
        continue;
      }
      queue.push(queue[i].left);
      queue.push(queue[i].right);
      process.stdout.write(`${"\t".repeat(tab)}${queue[i].data} `);
    }
    process.stdout.write("\n");

    queue = queue.slice(length);
    this.printTree(queue);
  }

  print() {
    this.printTree([this.root]);
  }
}

/*
String Permutations Tree

Devise a class that when instantiated it creates a tree that maps out all of the possible permutations of a given string.

- The root node will have a value of `undefined`
- The direct children of the root node will be each char of the string
- This pattern will continue until it maps out each unique permutation of the string
- Your class should be able to create a permutations tree for (theoretically) any length string
- Assume that all characters in the string are unique

1) Create a `Node` class to represent your nodes
2) Create the `PermutationTree` class that builds the tree given a string as input
3) BONUS! Create a `.prettyPrint()` method on your `PermutationTree` class that outputs the tree in a well formatted and readable style. Below is an example of what a tree might look like for the string `'abc'`

*/

/*

                   undefined
                       |

      a                b              c
  b      c          a     c         a    b
c          b      c         a     b        a

*/
