const EDGE_LIST = require("./edgeList");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.lastNode = null;
  }

  initialize(firsNode = null) {
    this.headNode = firstNode;
    this.lastNode = firstNode;
  }

  addFirstNode(data) {
    this.headNode = new Node(data, null);
    this.lastNode = this.headNode;
  }

  addNode(data) {
    if (!this.headNode) {
      this.addFirstNode(data);
    } else {
      const node = new Node(data, null);
      this.lastNode.next = node;
      this.lastNode = node;
    }
  }

  removeNode(index) {
    let counter = 0;
    let currentNode = this.headNode;
    let prevNode = null;

    while (counter < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      ++counter;
    }

    prevNode.next = currentNode.next;
  }

  findNode(index) {
    let counter = 0;
    let currentNode = this.headNode;

    while (counter < index) {
      currentNode = currentNode.next;
      ++counter;
    }

    return currentNode;
  }

  findPersonById(personId) {
    let currentNode = this.headNode;
    let counter = 1;

    while (currentNode !== null) {
      if (currentNode.data.person.id === personId) {
        return { data: currentNode.data, counter };
      }

      counter++;
      currentNode = currentNode.next;
    }

    return null;
  }

  printList() {
    let currentNode = this.headNode;

    let printString = "";
    while (currentNode !== null) {
      printString += `${currentNode.data.person.name}`;
      if (currentNode.data.weight) {
        printString += `(${currentNode.data.weight})`;
      }
      printString += `->  `;
      currentNode = currentNode.next;
    }

    console.log(printString);
  }
}

class AdjList {
  constructor(list) {
    this.size = this.determineSize(list);
    this.people = this.buildPeopleList(list);
    this.adjList = this.buildAdjList(list);
  }

  determineSize(list) {
    let people = new Set();

    list.forEach(person => {
      people.add(person[0].id);
      people.add(person[1].id);
    });

    return people.size;
  }

  buildPeopleList(list) {
    let people = [];

    for (let i = 0; i < this.size; i++) {
      let personAtIndex;

      for (let j = 0; j < list.length; j++) {
        let fromPerson = list[j][0];
        let toPerson = list[j][1];

        if (fromPerson.id === i) {
          personAtIndex = fromPerson;
          break;
        }

        if (toPerson.id === i) {
          personAtIndex = toPerson;
          break;
        }
      }

      people[i] = personAtIndex;
    }

    return people;
  }

  buildAdjList(list) {
    let matrix = new Array(this.size).fill(null);
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < list.length; j++) {
        let fromPerson = list[j][0];
        let toPerson = list[j][1];
        let weight = list[j][2];
        if (fromPerson.id === i) {
          if (matrix[i] === null) {
            matrix[i] = new LinkedList();
            // Linked List is initialized with the "from person" at the head
            matrix[i].addNode({ person: fromPerson });
            matrix[i].addNode({ person: toPerson, weight });
          } else {
            matrix[i].addNode({ person: toPerson, weight });
          }
        }
      }
    }

    return matrix;
  }

  printAdjList() {
    for (let i = 0; i < this.adjList.length; i++) {
      if (this.adjList[i]) {
        this.adjList[i].printList();
      } else {
        console.log("x");
      }
    }
  }

  edgeWeight(fromId, toId) {
    let weight = this.adjList[fromId].findPersonById(toId).data.weight;
    console.log(weight);
  }
}

let adjList = new AdjList(EDGE_LIST);
adjList.printAdjList();
adjList.edgeWeight(1, 10);
adjList.edgeWeight(5, 3);