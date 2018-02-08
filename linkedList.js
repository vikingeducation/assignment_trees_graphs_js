class Node {
  constructor(user, weight, next) {
    this.user = user;
    this.weight = weight;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.lastNode = null;
  }

  addFirstNode(user, weight) {
    this.headNode = new Node(user, weight, null);
    this.lastNode = this.headNode;
  }

  addNode(user, weight) {
    if (!this.headNode) {
      this.addFirstNode(user, weight);
    } else {
      this.lastNode.next = new Node(user, weight, null);
      this.lastNode = this.lastNode.next;
    }
  }

  addNodeAtIndex(user, weight, index) {
    if (!parseInt(index)) return 'Invalid index';
    let prevNode, nextNode;
    let ticker = 0;

    if (index === 0) {
      const node = new Node(user, weight, this.headNode);
      this.headNode = node;
    }

    while (ticker !== index) {
      prevNode = prevNode ? prevNode.next : this.headNode;
      nextNode = nextNode ? nextNode.next : this.headNode.next;
      ticker++;
    }

    prevNode.next = new Node(user, weight, nextNode);
  }
}

module.exports = { Node, LinkedList };

