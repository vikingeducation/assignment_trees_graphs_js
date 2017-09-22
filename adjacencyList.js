const EDGE_LIST = require("./_edgeList");
const LinkedList = require("./linkedList");

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
        console.log(edge.person.name, " is connected to:");
        console.log(edge.toString());
      }
    });
  }
}

const adjacencyMatrix = new AdjacencyMatrix(EDGE_LIST);
adjacencyMatrix.display();
