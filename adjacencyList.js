const EDGE_LIST = require('./edgeList');
const { Node, LinkedList } = require('./LinkedList');

class AdjacencyList {
  constructor(list) {
    this.data = [];
    this.people = [];

    for (var i = 0; i < list.length; i++) {
      const edge = list[i];
      const person1 = edge[0];
      const person2 = edge[1];
      const weight = edge[2];

      if (!this.people[person1.id]) this.people[person1.id] = person1.name;
      if (!this.people[person2.id]) this.people[person2.id] = person2.name;
      this.appendNewNode(person1, person2, weight);
      this.appendNewNode(person2, person1, weight);
    }
  }

  appendNewNode(person1, person2, weight) {
    if (!this.data[person1.id]) {
      const linkedList = new LinkedList();
      linkedList.addFirstNode(person1, weight);
      linkedList.headNode.next = new Node(person2, weight, null);
      this.data[person1.id] = linkedList.headNode;
    } else {
      let currentNode = this.data[person1.id];
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(person2, weight, null);
    }
  }

  printAdjList() {
    for (var i = 0; i < this.data.length; i++) {
      process.stdout.write(this.data[i].user.name + '   --->   ');

      let currentNode = this.data[i].next;
      while (currentNode.next) {
        process.stdout.write(`${ currentNode.user.name }(${ currentNode.weight })`);
        currentNode = currentNode.next;
        if (currentNode.next) process.stdout.write(', ');
      }
      process.stdout.write('\n');
    }
  }

  edgeWeight(id1, id2) {
    let currentNode = this.data[id1];
    while (currentNode.next) {
      if (currentNode.next.user.id === id2) return currentNode.next.weight;
      currentNode = currentNode.next;
    }
  }
}

const list = new AdjacencyList(EDGE_LIST);
list.printAdjList();
console.log(list.edgeWeight(3, 19)); // should be 16

