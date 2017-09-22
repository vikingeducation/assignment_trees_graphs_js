class Node {
  //from an edge
  constructor(edge, next=null) {
    this.from = edge[0]
    this.to = edge[1];
    this.weight = edge[2]
    this.next = next;
  }
}

class LinkedList {
  constructor(headNode = null) {
    this.headNode = headNode;
    this.tailNode = headNode;
    this.length = this.headNode ? 1 : 0;
  }

  addFirstNode(data) {
    this.headNode = new Node(data, null);
    this.tailNode = this.headNode;
  }

  // Add a node to the end of the list
  addNode(data) {
    if (!this.tailNode) {
      this.addFirstNode(data);
    } else {
      const node = new Node(data, null);
      this.tailNode.next = node;
      this.tailNode = node;
    }
    this.length++;
  }

  removeNode(index) {
    // Case 1: HEAD IS NULL
    if (!this.headNode) return;

    let counter = 0;
    let currentNode = this.headNode;
    let prevNode = null;

    // Case 2: HEAD IS NOT NULL, BUT DELETING FIRST NODE
    if (!index) {
      this.headNode = this.headNode.next;
      // Case 2B: ONLY 1 NODE IN LINKED LIST
      if (!this.headNode) this.tailNode = this.headNode;
      currentNode.next = null;
      this.length--;
      return;
    }

    // Crawl until we hit index
    while (counter < index && currentNode) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      ++counter;
    }
    if (!currentNode) return;

    // Now remove the node
    let nextNode = currentNode.next;

    // Clear the `next` reference
    currentNode.next = null;

    // Make the previous one point correctly
    prevNode.next = nextNode;
    this.length--;
  }

  // Return the node at that position, like in an aNrray
  // It has no error handling
  findNode(index) {
    // Start at the head
    let counter = 0;
    let currentNode = this.headNode;

    // Crawl until we hit index
    while (counter < index) {
      currentNode = currentNode.next;
      if (!currentNode) return null;
      ++counter;
    }
    //BigO = O(index)
    return currentNode;
  }

  search(to) {
    let currentNode = this.headNode;
    let count = 1;

    // DON'T MAKE CIRCULAR LINKED LISTS!!!
    while (true) {
      if (!currentNode) return { count, node: null };
      if (currentNode.to === to) return { count, node: currentNode };
      currentNode = currentNode.next;
      count++;
    }

    return { count, node: null };
  }

  printNode(node) {
    process.stdout.write(` to: ${node.to.name}, weight: ${node.weight}`);
  }

  // Crawls and prints the list
  printList() {
    // Start at the head
    let currentNode = this.headNode;
    if (this.headNode) {
      process.stdout.write("From ")
      process.stdout.write(currentNode.from.name);
      process.stdout.write(" at index ")
      process.stdout.write(currentNode.from.id.toString());
    };
    while (currentNode) {
      this.printNode(currentNode);
      if (currentNode.next) {
        process.stdout.write(" =>");
      }
      currentNode = currentNode.next;
    }
    process.stdout.write("\n");
  }

  readNode(index) {
    this.printNode(this.findNode(index));
    console.log();
  }

  insertNode(index, data) {
    if (index === 0) {
      let node = new Node(data, this.headNode);
      this.headNode = node;
      return;
    }
    let prevNode = this.findNode(index - 1);
    let node = new Node(data, this.findNode(index));
    prevNode.next = node;
    this.length++;
  }

  reverse() {
    let current = this.headNode;
    let next = current.next;
    let prev;
    while (current.next) {
      prev = current;
      current = next;
      next = current.next;
      if (!next) break;
      current.next = prev;
    }
    current.next = prev;
    this.headNode.next = null;
    let oldHead = this.headNode;
    this.headNode = this.tailNode;
    this.tailNode = oldHead;
  }
}

module.exports = { Node, LinkedList };