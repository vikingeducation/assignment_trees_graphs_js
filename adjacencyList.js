const EDGE_LIST = require('./_edgeList');
const LinkedList = require('./linkedList');

class AdjacencyMatrix {
  constructor(edgeList) {
    this.edges = [];
    edgeList.forEach(([left, right, weight]) => {
      this.edges[left.id] = this.edges[left.id]
        ? this.edges[left.id]
        : new LinkedList();

      this.edges[left.id].person = left;
      right.weight = weight;
      this.edges[left.id].add(right);
    });
  }

  display() {
    this.edges.forEach(edge => {
      if (edge.head) {
        console.log(edge.person.name, ' is connected to:');
        console.log(edge.toString());
      }
    });
  }

  edgeWeight(left, right) {
    let current = this.edges[left].head;
    // console.log(this.edges[left]);
    while (current.data.id !== right && current.next) {
      current = current.next;
    }

    return current.data.id === right ? current.data.weight : null;
  }
}

const adjacencyMatrix = new AdjacencyMatrix(EDGE_LIST);
console.log(adjacencyMatrix.edgeWeight(1, 4));

// adjacencyMatrix.display();

/*
Mike  is connected to:
{"id":12,"name":"Garrett","weight":5}

Adam  is connected to:
{"id":17,"name":"Andur","weight":8}
{"id":0,"name":"Bob","weight":18}

Peter  is connected to:
{"id":2,"name":"Sally","weight":5}
{"id":11,"name":"Donald","weight":10}
{"id":4,"name":"Michael","weight":12}

Andur  is connected to:
{"id":5,"name":"Michelle","weight":17}
{"id":14,"name":"Mike","weight":9}

Tom  is connected to:
{"id":16,"name":"Peter","weight":14}
{"id":14,"name":"Mike","weight":9}

Boris  is connected to:
{"id":13,"name":"Xin","weight":7}
{"id":12,"name":"Garrett","weight":5}
{"id":18,"name":"Tom","weight":3}
{"id":2,"name":"Sally","weight":5}
 */
